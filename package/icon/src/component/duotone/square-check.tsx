
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=duotone square-check}
 * @preview ![square-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6TTEwNCAyNTZjMC02LjEgMi4zLTEyLjMgNy0xN2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGw0NyA0N2MzNy0zNyA3NC03NCAxMTEtMTExYzQuNy00LjcgMTAuOC03IDE3LTdzMTIuMyAyLjMgMTcgN2MyLjMgMi4zIDQuMSA1IDUuMyA3LjljLjYgMS41IDEgMi45IDEuMyA0LjRjLjIgMS4xIC4zIDIuMiAuMyAyLjJjLjEgMS4yIC4xIDEuMiAuMSAyLjVjLS4xIDEuNS0uMSAxLjktLjEgMi4zYy0uMSAuNy0uMiAxLjUtLjMgMi4yYy0uMyAxLjUtLjcgMy0xLjMgNC40Yy0xLjIgMi45LTIuOSA1LjYtNS4zIDcuOWMtNDIuNyA0Mi43LTg1LjMgODUuMy0xMjggMTI4Yy00LjcgNC43LTEwLjggNy0xNyA3cy0xMi4zLTIuMy0xNy03Yy0yMS4zLTIxLjMtNDIuNy00Mi43LTY0LTY0Yy00LjctNC43LTctMTAuOC03LTE3eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzM3IDE3NWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDkgMzM3Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtNjQtNjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45czI0LjYtOS40IDMzLjkgMGw0NyA0N0wzMDMgMTc1YzkuNC05LjQgMjQuNi05LjQgMzMuOSAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM104 256c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l47 47c37-37 74-74 111-111c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c2.3 2.3 4.1 5 5.3 7.9c.6 1.5 1 2.9 1.3 4.4c.2 1.1 .3 2.2 .3 2.2c.1 1.2 .1 1.2 .1 2.5c-.1 1.5-.1 1.9-.1 2.3c-.1 .7-.2 1.5-.3 2.2c-.3 1.5-.7 3-1.3 4.4c-1.2 2.9-2.9 5.6-5.3 7.9c-42.7 42.7-85.3 85.3-128 128c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-21.3-21.3-42.7-42.7-64-64c-4.7-4.7-7-10.8-7-17z" />
            <path d="M337 175c9.4 9.4 9.4 24.6 0 33.9L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default SquareCheck;