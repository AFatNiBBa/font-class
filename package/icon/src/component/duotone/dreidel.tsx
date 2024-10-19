
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=duotone dreidel}
 * @preview ![dreidel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04OS40IDE1My40Yzc5LjEgNzkuMSAxNTguMiAxNTguMiAyMzcuMyAyMzcuM2MyMi45LTIyLjkgNDUuOC00NS44IDY4LjctNjguN2MxOC43LTE4LjcgMTguNy00OS4xIDAtNjcuOUwzMzMuMyAxOTIgNDM4LjYgODYuNmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM0M0MzIuNCAzNS4xIDQyNC4yIDMyIDQxNiAzMnMtMTYuNCAzLjEtMjIuNiA5LjRMMjg4IDE0Ni43IDIyNS45IDg0LjdjLTE4LjctMTguNy00OS4xLTE4LjctNjcuOSAwYy0yMi45IDIyLjktNDUuOCA0NS44LTY4LjcgNjguN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyNi42IDM5MC42TDg5LjQgMTUzLjQgMTguNyAyMjRDNi43IDIzNiAwIDI1Mi4zIDAgMjY5LjNMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTQ2LjcgMGMxNyAwIDMzLjMtNi43IDQ1LjMtMTguN2w3MC42LTcwLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M89.4 153.4c79.1 79.1 158.2 158.2 237.3 237.3c22.9-22.9 45.8-45.8 68.7-68.7c18.7-18.7 18.7-49.1 0-67.9L333.3 192 438.6 86.6c12.5-12.5 12.5-32.8 0-45.3C432.4 35.1 424.2 32 416 32s-16.4 3.1-22.6 9.4L288 146.7 225.9 84.7c-18.7-18.7-49.1-18.7-67.9 0c-22.9 22.9-45.8 45.8-68.7 68.7z" />
            <path d="M326.6 390.6L89.4 153.4 18.7 224C6.7 236 0 252.3 0 269.3L0 416c0 35.3 28.7 64 64 64l146.7 0c17 0 33.3-6.7 45.3-18.7l70.6-70.6z" />
    </Icon>
);

export default Dreidel;