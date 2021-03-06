import { Err, GlobalErrorHandlerMiddleware, OverrideProvider, Req, Res } from '@tsed/common';
import { ValidationError } from 'class-validator';
import { BadRequest, Exception } from 'ts-httpexceptions';
import { getFormValidationErrorText } from '../../shared/shared-utils';

/**
 * Overriding the global error handling allows us to throw invalid form errors and handle them correctly.
 */
@OverrideProvider(GlobalErrorHandlerMiddleware)
export class ErrorHandlerMiddleware extends GlobalErrorHandlerMiddleware {
  use(@Err() error: any, @Req() request: Req, @Res() response: Res): any {
    // Check if the error is a form validation error
    if (error instanceof Array) {
      if (error.length > 0 && error[0] instanceof ValidationError)
        // Check if the first error in the array is a validation error
        // If so, print a bad-request with all of the form validation errors
        error = new BadRequest(getFormValidationErrorText(error));
    }

    // If it's an HTTP exception, return it to the client correctly for the client to handle
    if (error instanceof Exception) {
      return response.status(error.status || 500).json({
        status: 'error',
        error: error.message
      });
    }

    // We don't know of this error, return it
    return super.use(error, request, response);
  }
}
