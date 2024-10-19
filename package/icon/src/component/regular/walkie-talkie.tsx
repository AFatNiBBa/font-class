
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `walkie-talkie` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/walkie-talkie?s=regular walkie-talkie}
 * @preview ![walkie-talkie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgOTZIMzIwVjgwQzMyMCA3MS4xNjMgMzEyLjgzNyA2NCAzMDQgNjRIMjcyQzI2My4xNjMgNjQgMjU2IDcxLjE2MyAyNTYgODBWOTZIMjI0VjgwQzIyNCA3MS4xNjMgMjE2LjgzNyA2NCAyMDggNjRIMTc2QzE2Ny4xNjMgNjQgMTYwIDcxLjE2MyAxNjAgODBWOTZIMTEyVjI0QzExMiAxMC43NDUgMTAxLjI1NSAwIDg4IDBIODhDNzQuNzQ1IDAgNjQgMTAuNzQ1IDY0IDI0Vjk2SDMyQzE0LjQgOTYgMCAxMTAuNCAwIDEyOFYzMDYuNzQyQzAgMzE1LjIzMSAzLjM3MiAzMjMuMzcyIDkuMzc1IDMyOS4zNzVMMzIgMzUyVjQ2NEMzMiA0OTAuNTEgNTMuNDkgNTEyIDgwIDUxMkgzMDRDMzMwLjUxIDUxMiAzNTIgNDkwLjUxIDM1MiA0NjRWMzUyTDM3NC42MzEgMzI5LjM2OUMzODAuNjMgMzIzLjM3IDM4NCAzMTUuMjM0IDM4NCAzMDYuNzVWMTI4QzM4NCAxMTAuNCAzNjkuNiA5NiAzNTIgOTZaTTMzNiAzMDAuMTI1TDMxOCAzMThMMzA0IDMzMi4xMjVWNDY0SDgwVjMzMi4xMjVMNjYgMzE4TDQ4IDMwMC4xMjVWMTQ0SDMzNlYzMDAuMTI1Wk0xMjggMjQwSDI1NkMyNjQuODc1IDI0MCAyNzIgMjMyLjg3NSAyNzIgMjI0VjIwOEMyNzIgMTk5LjEyNSAyNjQuODc1IDE5MiAyNTYgMTkySDEyOEMxMTkuMTI1IDE5MiAxMTIgMTk5LjEyNSAxMTIgMjA4VjIyNEMxMTIgMjMyLjg3NSAxMTkuMTI1IDI0MCAxMjggMjQwWk0xMjggMzIwSDI1NkMyNjQuODc1IDMyMCAyNzIgMzEyLjg3NSAyNzIgMzA0VjI4OEMyNzIgMjc5LjEyNSAyNjQuODc1IDI3MiAyNTYgMjcySDEyOEMxMTkuMTI1IDI3MiAxMTIgMjc5LjEyNSAxMTIgMjg4VjMwNEMxMTIgMzEyLjg3NSAxMTkuMTI1IDMyMCAxMjggMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WalkieTalkie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 96H320V80C320 71.163 312.837 64 304 64H272C263.163 64 256 71.163 256 80V96H224V80C224 71.163 216.837 64 208 64H176C167.163 64 160 71.163 160 80V96H112V24C112 10.745 101.255 0 88 0H88C74.745 0 64 10.745 64 24V96H32C14.4 96 0 110.4 0 128V306.742C0 315.231 3.372 323.372 9.375 329.375L32 352V464C32 490.51 53.49 512 80 512H304C330.51 512 352 490.51 352 464V352L374.631 329.369C380.63 323.37 384 315.234 384 306.75V128C384 110.4 369.6 96 352 96ZM336 300.125L318 318L304 332.125V464H80V332.125L66 318L48 300.125V144H336V300.125ZM128 240H256C264.875 240 272 232.875 272 224V208C272 199.125 264.875 192 256 192H128C119.125 192 112 199.125 112 208V224C112 232.875 119.125 240 128 240ZM128 320H256C264.875 320 272 312.875 272 304V288C272 279.125 264.875 272 256 272H128C119.125 272 112 279.125 112 288V304C112 312.875 119.125 320 128 320Z" />
        </Icon>
    </>
}