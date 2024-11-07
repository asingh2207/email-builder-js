/// <reference types="react" />
import { z } from 'zod';
export declare const SpacerPropsSchema: any;
export type SpacerProps = z.infer<typeof SpacerPropsSchema>;
export declare const SpacerPropsDefaults: {
    height: number;
};
export declare function Spacer({ props }: SpacerProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map