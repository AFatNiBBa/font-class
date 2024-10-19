
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pool-8-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pool-8-ball?s=duotone pool-8-ball}
 * @preview ![pool-8-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDAgMjE2YzAgMzAuOSAyNS4xIDU2IDU2IDU2czU2LTI1LjEgNTYtNTZjMC0xNi42LTcuMi0zMS41LTE4LjctNDEuOEMzMDAgMTY2IDMwNCAxNTUuNSAzMDQgMTQ0YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4cy00OCAyMS41LTQ4IDQ4YzAgMTEuNSA0IDIyIDEwLjcgMzAuMkMyMDcuMiAxODQuNSAyMDAgMTk5LjQgMjAwIDIxNnptODAgMGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwem0tOC03MmExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6bTAtNDQ4YTEyOCAxMjggMCAxIDEgMCAyNTYgMTI4IDEyOCAwIDEgMSAwLTI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pool_8Ball: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M200 216c0 30.9 25.1 56 56 56s56-25.1 56-56c0-16.6-7.2-31.5-18.7-41.8C300 166 304 155.5 304 144c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 11.5 4 22 10.7 30.2C207.2 184.5 200 199.4 200 216zm80 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-8-72a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-448a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default Pool_8Ball;