/// <reference types="react" />
import { z } from 'zod';
export declare const ContainerPropsSchema: any;
export type ContainerProps = {
    style?: z.infer<typeof ContainerPropsSchema>['style'];
    children?: JSX.Element | JSX.Element[] | null;
};
export declare function Container({ style, children }: ContainerProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map