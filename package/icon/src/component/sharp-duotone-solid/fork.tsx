
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fork` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=sharp-duotone-solid fork}
 * @preview ![fork](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNDAgMTU1LjNjMCAxOS40IDYuNCAzOC4xIDE4IDUzLjRjMi40IDMuMiA1LjEgNi4zIDggOS4xYzkuNCA5LjQgMTguOCAxOC44IDI4LjIgMjguMmMyLjkgMi45IDUuOSA1LjUgOS4xIDhjMTUuMyAxMS42IDM0IDE4IDUzLjQgMThjMzEuOCAwIDYxLjEtMTcgNzYuOC00NC42TDUwNCAxMDQgNDg4IDg4IDM4NCAxOTJsLTE2LTE2TDQ2NCA2NCA0NDggNDggMzM2IDE0NGwtMTYtMTZMNDI0IDI0IDQwOCA4IDI4NC42IDc4LjVDMjU3IDk0LjMgMjQwIDEyMy42IDI0MCAxNTUuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1OCAyMDguOGMyLjQgMy4yIDUuMSA2LjMgOCA5LjFsMjguMiAyOC4yYzIuOSAyLjkgNS45IDUuNSA5LjEgOEw3MC42IDQ4Ni42IDQ4IDUwOS4zIDIuNyA0NjRsMjIuNi0yMi42TDI1OCAyMDguOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M240 155.3c0 19.4 6.4 38.1 18 53.4c2.4 3.2 5.1 6.3 8 9.1c9.4 9.4 18.8 18.8 28.2 28.2c2.9 2.9 5.9 5.5 9.1 8c15.3 11.6 34 18 53.4 18c31.8 0 61.1-17 76.8-44.6L504 104 488 88 384 192l-16-16L464 64 448 48 336 144l-16-16L424 24 408 8 284.6 78.5C257 94.3 240 123.6 240 155.3z" />
            <path d="M258 208.8c2.4 3.2 5.1 6.3 8 9.1l28.2 28.2c2.9 2.9 5.9 5.5 9.1 8L70.6 486.6 48 509.3 2.7 464l22.6-22.6L258 208.8z" />
    </Icon>
);

export default Fork;