
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=sharp-duotone-solid mars-stroke}
 * @preview ![mars-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzA0YTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAwTDM4NCAwIDM1MiAzMmw0MS40IDQxLjQtMjMgMjNMMzQ1IDcxbC0xNy0xN0wyOTQuMSA4OGwxNyAxNyAyNS40IDI1LjRMMzA3LjggMTU5Yy0yOC40LTE5LjUtNjIuNy0zMS05OS44LTMxYy05Ny4yIDAtMTc2IDc4LjgtMTc2IDE3NnM3OC44IDE3NiAxNzYgMTc2czE3Ni03OC44IDE3Ni0xNzZjMC0zNy0xMS40LTcxLjQtMzEtOTkuOGwyOC42LTI4LjZMNDA3IDIwMWwxNyAxN0w0NTcuOSAxODRsLTE3LTE3LTI1LjQtMjUuNCAyMy0yM0w0ODAgMTYwbDMyLTMyTDUxMiAwek05NiAzMDRhMTEyIDExMiAwIDEgMSAyMjQgMEExMTIgMTEyIDAgMSAxIDk2IDMwNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M512 0L384 0 352 32l41.4 41.4-23 23L345 71l-17-17L294.1 88l17 17 25.4 25.4L307.8 159c-28.4-19.5-62.7-31-99.8-31c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201l17 17L457.9 184l-17-17-25.4-25.4 23-23L480 160l32-32L512 0zM96 304a112 112 0 1 1 224 0A112 112 0 1 1 96 304z" />
    </Icon>
);

export default MarsStroke;