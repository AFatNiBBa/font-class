
import { Icon, generic } from "../../index";

/**
 * A component that renders the `banana` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=sharp-duotone-solid banana}
 * @preview ![banana](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNjMuMyAyODIuNWMyMC4zIDEyIDQwLjYgMjQgNjAuOSAzNi4xYzM4LjQtOC4xIDc2LjgtMTYuMiAxMTUuMS0yNC4yYzUuNy0yMi41IDguNy00Ni4xIDguNy03MC4zYzAtODQuNy0zNi42LTE2MC45LTk0LjgtMjEzLjZMMjg4LjEgNTVjMTAuMyAyNy43IDE1LjkgNTcuNyAxNS45IDg5YzAgNTEtMTQuOSA5OC42LTQwLjcgMTM4LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NjcuMSAyODguNWwxMi43LTIuNyAuOS0uMiA5LjMgMTAuNCA2NCA3Mkw1NjkuOSAzODYgNTM0IDQxNy45bC0xNS45LTE3LjktNTQuNy02MS42LTQzIDkuMUMzNzQuMSA0NDQuNyAyNzQuOSA1MTIgMTYwIDUxMkwwIDUxMiAwIDQwMGw0OCAwYzcyLjkgMCAxMzguNy0zMC41IDE4NS40LTc5LjRsLTIyLjEtMTMuMS04MC4yIDQxLjgtMjEuMyAxMS4xTDg3LjYgMzE3LjhsMjEuMy0xMS4xIDkyLTQ4IDExLjgtNi4yIDExLjUgNi44IDM5LjEgMjMuMiA2MC45IDM2LjEgMTE1LjEtMjQuMiAyNy43LTUuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M263.3 282.5c20.3 12 40.6 24 60.9 36.1c38.4-8.1 76.8-16.2 115.1-24.2c5.7-22.5 8.7-46.1 8.7-70.3c0-84.7-36.6-160.9-94.8-213.6L288.1 55c10.3 27.7 15.9 57.7 15.9 89c0 51-14.9 98.6-40.7 138.5z" />
            <path d="M467.1 288.5l12.7-2.7 .9-.2 9.3 10.4 64 72L569.9 386 534 417.9l-15.9-17.9-54.7-61.6-43 9.1C374.1 444.7 274.9 512 160 512L0 512 0 400l48 0c72.9 0 138.7-30.5 185.4-79.4l-22.1-13.1-80.2 41.8-21.3 11.1L87.6 317.8l21.3-11.1 92-48 11.8-6.2 11.5 6.8 39.1 23.2 60.9 36.1 115.1-24.2 27.7-5.8z" />
    </Icon>
);

export default Banana;