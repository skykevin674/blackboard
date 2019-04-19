import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
declare const JSEncrypt;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNYH8G0UY5bd6fU3o+PZ6IDjRk
akVg3GvU6AL3ADAKBg8Fh7hVDIYBc0e14W3mIFkya3xkbQn5hk1J6s18/ygXURLp
MAOTY5gKE15xKJdnZHlgzkAoLNokUOjvV/9L0JLcd4aXxd4VTpM4BkE06kKnfYDt
Xc7sqE8nXJqWsGbo5QIDAQAB
-----END PUBLIC KEY-----
`;

@Injectable()
export class EncryptInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && typeof req.body === 'object') {
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      const body = encrypt.encrypt(JSON.stringify(req.body));
      const clone = req.clone({ body });
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
