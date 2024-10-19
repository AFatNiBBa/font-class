
import { Icon } from "../../index";

/**
 * A component that renders the `t-rex` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t-rex?s=sharp-regular t-rex}
 * @preview ![t-rex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDIzLjkgNDhjMCAwLS4xIDAtLjEgMEMzOTMuMSA0OCAzNjggNzMuMSAzNjggMTA0bDAgOC43LTUuNiA2LjctNDAgNDgtNy4yIDguNkwzMDQgMTc2bC0xNiAwYy02MS45IDAtMTEyIDUwLjEtMTEyIDExMmwwIDI0LTI0IDAtNDAgMC0xNS40IDAtNi40LTEzLjlMNjEuMyAyMzUuNGwtNC43IDExLjhjLTUuNyAxNC4yLTguNiAyOS4zLTguNiA0NC42bDAgNC4zYzAgNTcuNCA0Ni42IDEwNCAxMDQgMTA0bDQwIDAgMC0yNCAwLTI0IDQ4IDAgMCAyNCAwIDMwLjFMMjk3LjkgNDY0bDg2LjEgMCAwLTE2YzAtOC44LTcuMi0xNi0xNi0xNmwtMjQgMC0xMi44IDBMMzI0IDQyMS4zbC0xNi0yNEwyOTkuOCAzODVsNy40LTEyLjlMMzM2IDMyMS42bDAtMS42YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4bC0xNiAwIDAtNDggMTYgMGM1MyAwIDk2IDQzIDk2IDk2bDAgOCAwIDYuNC0zLjIgNS41TDM1Ni4yIDM4M2wuNiAxIDExLjIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDQwIDAgMjQtMjQgMC0xMjAgMC05LjkgMC03LTctNTctNTdMMTUyIDQ0OEM2OC4xIDQ0OCAwIDM3OS45IDAgMjk2bDAtNC4zYzAtMjEuNCA0LjEtNDIuNSAxMi02Mi40bDIxLjctNTQuMyA2LTE1LjFMNTYgMTYwbDggMCAxNS40IDAgNi40IDEzLjlMMTI3LjQgMjY0bDIuNCAwYzExLjYtNzcgNzgtMTM2IDE1OC4yLTEzNmw0LjggMCAyNy42LTMzLjJDMzI1IDQxLjggMzY5LjUgMCA0MjMuOCAwYzAgMCAwIDAgLjEgMGwuMSAwIDg4IDAgMTQuOCAwIDYuNiAxMy4zIDkuNSAxOUM1OTcuMSAzNS44IDY0MCA4MC45IDY0MCAxMzZsMCA2NCAwIDI0LTI0IDAtMjggMC0xNi44IDIyLjRMNTY0IDI1NmwtMTIgMC05MiAwLTE1LjMgMjAuNSA1NSAzMC42IDEyLjMgNi45IDAgMTQuMSAwIDMyIDAgMjQtNDggMCAwLTI0IDAtMTcuOS00OC4xLTI2LjdjLS43LTIxLjUtNi40LTQxLjYtMTUuOS01OS40bDI4LjgtMzguNEw0MzYgMjA4bDEyIDAgOTIgMC0xMiAwLTYuNiAwLTQuNy00LjdMNDg5LjQgMTc2IDQ2NCAxNzZsLTE2IDAgMC0zMiAxNiAwIDMyIDAgNi42IDAgNC43IDQuN0w1MzQuNiAxNzZsNTcuNCAwIDAtNDBjMC0zMC45LTI1LjEtNTYtNTYtNTZsLTggMC0xNC44IDAtNi42LTEzLjNMNDk3LjIgNDggNDI0IDQ4YzAgMCAwIDAtLjEgMHMwIDAgMCAwek00NTYgODhhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TRex: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M423.9 48c0 0-.1 0-.1 0C393.1 48 368 73.1 368 104l0 8.7-5.6 6.7-40 48-7.2 8.6L304 176l-16 0c-61.9 0-112 50.1-112 112l0 24-24 0-40 0-15.4 0-6.4-13.9L61.3 235.4l-4.7 11.8c-5.7 14.2-8.6 29.3-8.6 44.6l0 4.3c0 57.4 46.6 104 104 104l40 0 0-24 0-24 48 0 0 24 0 30.1L297.9 464l86.1 0 0-16c0-8.8-7.2-16-16-16l-24 0-12.8 0L324 421.3l-16-24L299.8 385l7.4-12.9L336 321.6l0-1.6c0-26.5-21.5-48-48-48l-16 0 0-48 16 0c53 0 96 43 96 96l0 8 0 6.4-3.2 5.5L356.2 383l.6 1 11.2 0c35.3 0 64 28.7 64 64l0 40 0 24-24 0-120 0-9.9 0-7-7-57-57L152 448C68.1 448 0 379.9 0 296l0-4.3c0-21.4 4.1-42.5 12-62.4l21.7-54.3 6-15.1L56 160l8 0 15.4 0 6.4 13.9L127.4 264l2.4 0c11.6-77 78-136 158.2-136l4.8 0 27.6-33.2C325 41.8 369.5 0 423.8 0c0 0 0 0 .1 0l.1 0 88 0 14.8 0 6.6 13.3 9.5 19C597.1 35.8 640 80.9 640 136l0 64 0 24-24 0-28 0-16.8 22.4L564 256l-12 0-92 0-15.3 20.5 55 30.6 12.3 6.9 0 14.1 0 32 0 24-48 0 0-24 0-17.9-48.1-26.7c-.7-21.5-6.4-41.6-15.9-59.4l28.8-38.4L436 208l12 0 92 0-12 0-6.6 0-4.7-4.7L489.4 176 464 176l-16 0 0-32 16 0 32 0 6.6 0 4.7 4.7L534.6 176l57.4 0 0-40c0-30.9-25.1-56-56-56l-8 0-14.8 0-6.6-13.3L497.2 48 424 48c0 0 0 0-.1 0s0 0 0 0zM456 88a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default TRex;