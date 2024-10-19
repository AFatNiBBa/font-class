
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=sharp-duotone-solid reply-clock}
 * @preview ![reply-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MEwxOTIgNDE2bDMyIDAgMC05NiA4MCAwYzYxLjkgMCAxMTIgNTAuMSAxMTIgMTEyYzAgNDgtMzIgODAtMzIgODBzMTI4LTQ4IDEyOC0xNzZjMC01LjYtLjMtMTEuMi0uOC0xNi42Yy01IC40LTEwLjEgLjYtMTUuMiAuNmMtOTEuOCAwLTE2Ny4yLTcwLjMtMTc1LjMtMTYwTDIyNCAxNjBsMC05Ni0zMiAwTDAgMjQweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDk2IDI4OEExNDQgMTQ0IDAgMSAwIDQ5NiAwYTE0NCAxNDQgMCAxIDAgMCAyODh6TTUxMiA4MGwwIDQ4IDMyIDAgMTYgMCAwIDMyLTE2IDAtNDggMC0xNiAwIDAtMTYgMC02NCAwLTE2IDMyIDAgMCAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240L192 416l32 0 0-96 80 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6c-91.8 0-167.2-70.3-175.3-160L224 160l0-96-32 0L0 240z" />
            <path d="M496 288A144 144 0 1 0 496 0a144 144 0 1 0 0 288zM512 80l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default ReplyClock;