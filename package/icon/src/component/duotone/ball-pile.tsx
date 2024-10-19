
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ball-pile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ball-pile?s=duotone ball-pile}
 * @preview ![ball-pile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQzMmE4MCA4MCAwIDEgMCAxNjAgMEE4MCA4MCAwIDEgMCAwIDQzMnpNMjA4IDgwYTgwIDgwIDAgMSAwIDE2MCAwQTgwIDgwIDAgMSAwIDIwOCA4MHptMCAzNTJhODAgODAgMCAxIDAgMTYwIDAgODAgODAgMCAxIDAgLTE2MCAwem0yMDggMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMzI4YTgwIDgwIDAgMSAwIDAtMTYwIDgwIDgwIDAgMSAwIDAgMTYwem0yMjQgMGE4MCA4MCAwIDEgMCAwLTE2MCA4MCA4MCAwIDEgMCAwIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BallPile: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 432a80 80 0 1 0 160 0A80 80 0 1 0 0 432zM208 80a80 80 0 1 0 160 0A80 80 0 1 0 208 80zm0 352a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm208 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm224 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </Icon>
);

export default BallPile;