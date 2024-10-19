
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug-bottle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-bottle?s=sharp-duotone-solid jug-bottle}
 * @preview ![jug-bottle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgMTc1LjJsMCAyMTYuMmMuMyAuMiAuNyAuNCAxIC42Yy0uMyAuMi0uNyAuNC0xIC42TDQxNiA1MTJsMjI0IDAgMC02NGMwLTI0LjEtMTMuMy00NS4xLTMzLTU2YzE5LjctMTAuOSAzMy0zMS45IDMzLTU2YzAtMjMuNS0xMi42LTQ0LTMxLjUtNTUuMWMxOC43LTEwLjEgMzEuNS0yOS45IDMxLjUtNTIuN2MwLTIzLjItMTMuNC00NC4zLTM0LjQtNTQuMmwtMjkuOC0xNC0xMjcuNSAwLTI5LjggMTRjLS44IC40LTEuNiAuOC0yLjQgMS4yek00NDggNjRsMCA2NCAxMjggMCAwLTY0TDQ0OCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDBMMjI0IDBsMCA0OCAzMiAwIDAgNDhMNjQgOTZsMC00OCAzMiAwTDk2IDB6TTAgMjU2YzAtNzAuNyA1Ny4zLTEyOCAxMjgtMTI4bDI1NiAwIDAgMzg0TDAgNTEyIDAgMjU2em0yNTYtMzJsMCAxNjAgNjQgMCAwLTE2MC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const JugBottle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 175.2l0 216.2c.3 .2 .7 .4 1 .6c-.3 .2-.7 .4-1 .6L416 512l224 0 0-64c0-24.1-13.3-45.1-33-56c19.7-10.9 33-31.9 33-56c0-23.5-12.6-44-31.5-55.1c18.7-10.1 31.5-29.9 31.5-52.7c0-23.2-13.4-44.3-34.4-54.2l-29.8-14-127.5 0-29.8 14c-.8 .4-1.6 .8-2.4 1.2zM448 64l0 64 128 0 0-64L448 64z" />
            <path d="M96 0L224 0l0 48 32 0 0 48L64 96l0-48 32 0L96 0zM0 256c0-70.7 57.3-128 128-128l256 0 0 384L0 512 0 256zm256-32l0 160 64 0 0-160-64 0z" />
    </Icon>
);

export default JugBottle;