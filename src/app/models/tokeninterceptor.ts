import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthServiceService) { }

    apisToSkip = ['access-tokens', 'v1/customers'];

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor started');
        const skipToken = this.apisToSkip.find((api) =>
            this.skipRoute(api, req)
        );
        if (skipToken) {
            return next.handle(req);
        }
        req = req.clone({
            headers: req.headers.set(
                'X-ACCESS-TOKEN',
                this.authService.getToken()
            ),
        });
        console.log('token added');
        console.log(req);
        return next.handle(req);
    }

    skipRoute(api, request) {
        console.log(request);
        if (request.url.indexOf(api) > -1) {
            return true;
        }
        return false;
    }
}