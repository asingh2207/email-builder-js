/// <reference types="react" />
import { z } from 'zod';
export declare const HeadingPropsSchema: any;
export type HeadingProps = z.infer<typeof HeadingPropsSchema>;
export declare const HeadingPropsDefaults: {
    readonly level: "h2";
    readonly text: "";
};
export declare function Heading({ props, style }: HeadingProps): JSX.Element | undefined;
//# sourceMappingURL=index.d.ts.map