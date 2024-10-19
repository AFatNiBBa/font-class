
import { Icon } from "../../index";

/**
 * A component that renders the `comments` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=light comments}
 * @preview ![comments](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTc2YzAtNzQuOCA3My43LTE0NCAxNzYtMTQ0czE3NiA2OS4yIDE3NiAxNDRzLTczLjcgMTQ0LTE3NiAxNDRjLTE1LjMgMC0zMC42LTEuOS00Ni4zLTVjLTMuNS0uNy03LjEtLjItMTAuMiAxLjRjLTYuMSAzLjEtMTIgNi0xOCA4LjdjLTI4LjQgMTIuOS02MC4yIDIzLjEtOTEuNSAyNmMxNC45LTE5IDI2LjgtMzkuNyAzNy42LTU5LjljMy4zLTYuMSAyLjMtMTMuNi0yLjUtMTguNkM1MCAyNDQuMiAzMiAyMTMuMSAzMiAxNzZ6TTIwOCAwQzkzLjEgMCAwIDc4LjkgMCAxNzZjMCA0NC4yIDE5LjggODAuMSA0NiAxMTBjLTExLjcgMjEtMjQgNDAuNi0zOS41IDU3LjVjMCAwIDAgMCAwIDBsLS4xIC4xYy02LjUgNy04LjIgMTcuMS00LjQgMjUuOEM1LjggMzc4LjMgMTQuNCAzODQgMjQgMzg0YzQzIDAgODYuNS0xMy4zIDEyMi43LTI5LjdjNC45LTIuMiA5LjYtNC41IDE0LjMtNi44YzE1LjMgMi44IDMwLjkgNC42IDQ3IDQuNmMxMTQuOSAwIDIwOC03OC45IDIwOC0xNzZTMzIyLjkgMCAyMDggMHpNNDQ3LjQgMTYwLjVDNTQxLjYgMTY3IDYwOCAyMzMgNjA4IDMwNGMwIDM3LjEtMTggNjguMi00NS4xIDk2LjZjLTQuOCA1LTUuOCAxMi41LTIuNSAxOC42YzEwLjkgMjAuMiAyMi43IDQwLjggMzcuNiA1OS45Yy0zMS4zLTMtNjMuMi0xMy4yLTkxLjUtMjZjLTYtMi43LTExLjktNS42LTE4LTguN2MtMy4yLTEuNi02LjgtMi4xLTEwLjItMS40Yy0xNS42IDMuMS0zMC45IDUtNDYuMyA1Yy02OC4yIDAtMTIzLjYtMzAuNy0xNTMuMS03My4zYy0xMSAzLTIyLjMgNS4yLTMzLjggNi44QzI3OSA0MzkuOCAzNDkuOSA0ODAgNDMyIDQ4MGMxNi4xIDAgMzEuNy0xLjggNDctNC42YzQuNiAyLjMgOS40IDQuNiAxNC4zIDYuOEM1MjkuNSA0OTguNyA1NzMgNTEyIDYxNiA1MTJjOS42IDAgMTguMi01LjcgMjItMTQuNWMzLjgtOC43IDItMTguOS00LjQtMjUuOGwtLjEtLjFzMCAwIDAgMGMtMTUuNS0xNy0yNy44LTM2LjUtMzkuNS01Ny41YzI2LjItMjkuOSA0Ni02NS44IDQ2LTExMGMwLTk0LjQtODcuOC0xNzEuNS0xOTguMi0xNzUuOGMyLjggMTAuNCA0LjcgMjEuMiA1LjYgMzIuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 176c0-74.8 73.7-144 176-144s176 69.2 176 144s-73.7 144-176 144c-15.3 0-30.6-1.9-46.3-5c-3.5-.7-7.1-.2-10.2 1.4c-6.1 3.1-12 6-18 8.7c-28.4 12.9-60.2 23.1-91.5 26c14.9-19 26.8-39.7 37.6-59.9c3.3-6.1 2.3-13.6-2.5-18.6C50 244.2 32 213.1 32 176zM208 0C93.1 0 0 78.9 0 176c0 44.2 19.8 80.1 46 110c-11.7 21-24 40.6-39.5 57.5c0 0 0 0 0 0l-.1 .1c-6.5 7-8.2 17.1-4.4 25.8C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.9-2.2 9.6-4.5 14.3-6.8c15.3 2.8 30.9 4.6 47 4.6c114.9 0 208-78.9 208-176S322.9 0 208 0zM447.4 160.5C541.6 167 608 233 608 304c0 37.1-18 68.2-45.1 96.6c-4.8 5-5.8 12.5-2.5 18.6c10.9 20.2 22.7 40.8 37.6 59.9c-31.3-3-63.2-13.2-91.5-26c-6-2.7-11.9-5.6-18-8.7c-3.2-1.6-6.8-2.1-10.2-1.4c-15.6 3.1-30.9 5-46.3 5c-68.2 0-123.6-30.7-153.1-73.3c-11 3-22.3 5.2-33.8 6.8C279 439.8 349.9 480 432 480c16.1 0 31.7-1.8 47-4.6c4.6 2.3 9.4 4.6 14.3 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.7 2-18.9-4.4-25.8l-.1-.1s0 0 0 0c-15.5-17-27.8-36.5-39.5-57.5c26.2-29.9 46-65.8 46-110c0-94.4-87.8-171.5-198.2-175.8c2.8 10.4 4.7 21.2 5.6 32.3z" />
    </Icon>
);

export default Comments;