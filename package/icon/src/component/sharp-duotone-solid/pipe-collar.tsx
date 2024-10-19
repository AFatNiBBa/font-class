
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-collar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-collar?s=sharp-duotone-solid pipe-collar}
 * @preview ![pipe-collar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCA2My45YzAgLjYgMCAxLjIgLjEgMS43cy4xIDEuMSAuMiAxLjZjLjIgMSAuNSAyIC45IDNjLjggMS45IDIgMy42IDMuNCA1LjFDNTUuNiA3OC4yIDU5LjYgODAgNjQgODBjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZjLTQuNCAwLTguNCAxLjgtMTEuMyA0LjdjLTEuNCAxLjQtMi42IDMuMi0zLjQgNS4xYy0uNCAxLS43IDItLjkgM2MtLjEgLjUtLjIgMS0uMiAxLjZjLS4xIC41LS4xIDEtLjEgMS42em0wIDM4My45YzAgLjggMCAxLjMgLjEgMS44Yy4xIC41IC4xIDEuMSAuMiAxLjZjLjIgMSAuNSAyIC45IDNjLjggMS45IDIgMy42IDMuNCA1LjFjMi45IDIuOSA2LjkgNC43IDExLjMgNC43YzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2Yy00LjQgMC04LjQgMS44LTExLjMgNC43Yy0xLjQgMS40LTIuNiAzLjItMy40IDUuMWMtLjQgMS0uNyAyLS45IDNjLS4xIC41LS4yIDEtLjIgMS42Yy0uMSAuNS0uMSAxLS4xIDEuNXpNOTYuMiAyNDcuN2MtLjEgMS40LS4xIDIuNy0uMiA0LjFjMCAxLjQtLjEgMi44LS4xIDQuMnMwIDIuOCAuMSA0LjJjMCAxLjQgLjEgMi43IC4yIDQuMWMuMSAyLjcgLjMgNS40IC42IDguMWMuNSA1LjQgMS40IDEwLjcgMi40IDE1LjljMi4xIDEwLjQgNS4zIDIwLjUgOS4zIDMwYzguMSAxOS4xIDE5LjggMzYuNCAzNC4zIDUwLjljMjkgMjkgNjkgNDYuOSAxMTMuMSA0Ni45Yzg4LjQgMCAxNjAtNzEuNiAxNjAtMTYwcy03MS42LTE2MC0xNjAtMTYwYy00NC4yIDAtODQuMiAxNy45LTExMy4xIDQ2LjljLTE0LjUgMTQuNS0yNi4yIDMxLjctMzQuMyA1MC45Yy00IDkuNi03LjIgMTkuNi05LjMgMzBjLTEuMSA1LjItMS45IDEwLjUtMi40IDE1LjljLS4zIDIuNy0uNSA1LjQtLjYgOC4xek00MzIgNjRhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHptMCAzODRhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk1LjkgMGwzMi44IDMzLjlDMTY2LjEgMTIuMyAyMDkuNiAwIDI1NiAwYzQ2LjIgMCA4OS41IDEyLjIgMTI2LjkgMzMuNkw0MTUuNCAwbDk1LjkgMCAwIDk1LjktMzMuNCAzMi4zQzQ5OS42IDE2NS44IDUxMiAyMDkuNSA1MTIgMjU2YzAgNDYuNC0xMi4zIDg5LjgtMzMuOSAxMjcuNGwzMy4yIDMyLjFMNTEyIDUxMmwtOTYuNi0uNy0zMi4xLTMzLjJDMzQ1LjggNDk5LjcgMzAyLjQgNTEyIDI1NiA1MTJjLTQ2LjUgMC05MC4yLTEyLjQtMTI3LjgtMzQuMUw5NS45IDUxMS4zIDAgNTExLjNsMC05NS45IDMzLjYtMzIuNUMxMi4yIDM0NS41IDAgMzAyLjIgMCAyNTZjMC00Ni40IDEyLjMtODkuOSAzMy45LTEyNy40TDAgOTUuOSAwIDAgOTUuOSAwek02NCA4MGExNiAxNiAwIDEgMCAwLTMyIDE2IDE2IDAgMSAwIDAgMzJ6TTI1NiA0MTZhMTYwIDE2MCAwIDEgMCAwLTMyMCAxNjAgMTYwIDAgMSAwIDAgMzIwek04MCA0NDhhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHpNNDQ4IDgwYTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnptMTYgMzY4YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PipeCollar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 63.9c0 .6 0 1.2 .1 1.7s.1 1.1 .2 1.6c.2 1 .5 2 .9 3c.8 1.9 2 3.6 3.4 5.1C55.6 78.2 59.6 80 64 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-4.4 0-8.4 1.8-11.3 4.7c-1.4 1.4-2.6 3.2-3.4 5.1c-.4 1-.7 2-.9 3c-.1 .5-.2 1-.2 1.6c-.1 .5-.1 1-.1 1.6zm0 383.9c0 .8 0 1.3 .1 1.8c.1 .5 .1 1.1 .2 1.6c.2 1 .5 2 .9 3c.8 1.9 2 3.6 3.4 5.1c2.9 2.9 6.9 4.7 11.3 4.7c8.8 0 16-7.2 16-16s-7.2-16-16-16c-4.4 0-8.4 1.8-11.3 4.7c-1.4 1.4-2.6 3.2-3.4 5.1c-.4 1-.7 2-.9 3c-.1 .5-.2 1-.2 1.6c-.1 .5-.1 1-.1 1.5zM96.2 247.7c-.1 1.4-.1 2.7-.2 4.1c0 1.4-.1 2.8-.1 4.2s0 2.8 .1 4.2c0 1.4 .1 2.7 .2 4.1c.1 2.7 .3 5.4 .6 8.1c.5 5.4 1.4 10.7 2.4 15.9c2.1 10.4 5.3 20.5 9.3 30c8.1 19.1 19.8 36.4 34.3 50.9c29 29 69 46.9 113.1 46.9c88.4 0 160-71.6 160-160s-71.6-160-160-160c-44.2 0-84.2 17.9-113.1 46.9c-14.5 14.5-26.2 31.7-34.3 50.9c-4 9.6-7.2 19.6-9.3 30c-1.1 5.2-1.9 10.5-2.4 15.9c-.3 2.7-.5 5.4-.6 8.1zM432 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 384a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
            <path d="M95.9 0l32.8 33.9C166.1 12.3 209.6 0 256 0c46.2 0 89.5 12.2 126.9 33.6L415.4 0l95.9 0 0 95.9-33.4 32.3C499.6 165.8 512 209.5 512 256c0 46.4-12.3 89.8-33.9 127.4l33.2 32.1L512 512l-96.6-.7-32.1-33.2C345.8 499.7 302.4 512 256 512c-46.5 0-90.2-12.4-127.8-34.1L95.9 511.3 0 511.3l0-95.9 33.6-32.5C12.2 345.5 0 302.2 0 256c0-46.4 12.3-89.9 33.9-127.4L0 95.9 0 0 95.9 0zM64 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM256 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM80 448a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM448 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 368a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default PipeCollar;