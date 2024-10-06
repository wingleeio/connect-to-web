import type { IncomingMessage, ServerResponse } from "http";

export type HeadersProvided = Record<string, string | string[] | undefined> | Headers;
export type NextFunction = (err?: unknown) => void;
export type ConnectMiddleware<
    PlatformRequest extends IncomingMessage = IncomingMessage,
    PlatformResponse extends ServerResponse = ServerResponse
> = (req: PlatformRequest, res: PlatformResponse, next: NextFunction) => void;
export type WebHandler = (request: Request) => Response | undefined | Promise<Response | undefined>;
