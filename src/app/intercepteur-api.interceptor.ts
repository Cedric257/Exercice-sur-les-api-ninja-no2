import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const apiIntercepteurInterceptor: HttpInterceptorFn = 
(req, next) => {
  const apiKey='Km6zrgw2XCmVWFR5ytLgIQ==87WF8LvvFSwgNfIB';
  const cloneReq=req.clone({
    setHeaders:{ 'X-Api-key': apiKey

    }
  });
  return next(cloneReq).pipe(
    tap(event=>{
      if(event.type===HttpEventType.Response){
        console.log(cloneReq.url,'returned a reponse with status', event.status)
      }
    })
  );
}
