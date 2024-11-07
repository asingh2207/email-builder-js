/// <reference types="react" />
import { z } from 'zod';
export declare const TextPropsSchema: any;
export type TextProps = z.infer<typeof TextPropsSchema>;
export declare const TextPropsDefaults: {
    text: string;
};
export declare function Text({ style, props }: TextProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map