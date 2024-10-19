
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=sharp-duotone-solid user-pen}
 * @preview ![user-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwzMTcuNCAwTDMzMSA0MTcuNGw2Ny4yLTY3LjJMMzg0IDMwNCA2NCAzMDQgMCA1MTJ6TTk2IDEyOGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgOTYgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQwIDI5NC44bC03MS03MS00MS4zIDQxLjMgNzEgNzFMNjQwIDI5NC44em0tNjMuOSA2My45bC03MS03MUwzNjMuOSA0MjkgMzUyIDUxMS45IDQzNC45IDUwMCA1NzYuMSAzNTguN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l317.4 0L331 417.4l67.2-67.2L384 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M640 294.8l-71-71-41.3 41.3 71 71L640 294.8zm-63.9 63.9l-71-71L363.9 429 352 511.9 434.9 500 576.1 358.7z" />
    </Icon>
);

export default UserPen;