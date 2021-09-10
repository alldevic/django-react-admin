declare module 'swagger-ui-react' {
    import * as React from 'react';
    import PropTypes from "prop-types"
    // import PropTypes, { InferProps, InferType } from "prop-types"

    interface Request {
        [k: string]: any;
    }
    interface Response {
        [k: string]: any;
    }
    type System = any;

    type PluginGenerator = (system: System) => object;

    type Plugin = object | PluginGenerator;

    export interface SwaggerUIProps {
        spec?: object | string | undefined;
        url?: string | undefined;
        onComplete?: ((system: System) => void) | undefined;
        requestInterceptor?: ((req: Request) => Request | Promise<Request>) | undefined;
        responseInterceptor?: ((res: Response) => Response | Promise<Response>) | undefined;
        docExpansion?: 'list' | 'full' | 'none' | undefined;
        defaultModelExpandDepth?: number | undefined;
        plugins?: Plugin[] | undefined;
        supportedSubmitMethods?: string[] | undefined;
        deepLinking?: boolean | undefined;
        showMutatedRequest?: boolean | undefined;
        displayOperationId?: boolean | undefined;
        layout?: string | undefined;
        filter?: boolean | undefined;
    }

    export interface Layout {
        errSelectors: PropTypes.object.isRequired,
        errActions: PropTypes.object.isRequired,
        specSelectors: PropTypes.object.isRequired,
        oas3Selectors: PropTypes.object.isRequired,
        oas3Actions: PropTypes.object.isRequired,
        getComponent: PropTypes.func.isRequired,
        // errSelectors: InferType<typeof PropTypes.object.isRequired>,
        // errActions: InferType<typeof PropTypes.object.isRequired>,
        // specSelectors: InferType<typeof PropTypes.object.isRequired>,
        // oas3Selectors: InferType<typeof PropTypes.object.isRequired>,
        // oas3Actions: InferType<typeof PropTypes.object.isRequired>,
        // getComponent: InferType<typeof PropTypes.func.isRequired>,
    }

    class SwaggerUI extends React.PureComponent<SwaggerUIProps> { }
    export = SwaggerUI;
};
