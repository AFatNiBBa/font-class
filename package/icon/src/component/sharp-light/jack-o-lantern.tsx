
import { Icon } from "../../index";

/**
 * A component that renders the `jack-o-lantern` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=sharp-light jack-o-lantern}
 * @preview ![jack-o-lantern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjc1LjYgOTYuNGMtMTMuNiAxLTI2LjggMy41LTM5LjUgNy4zbDMuMS02LjEgMzQuNS02OUwyODggMGwyOC42IDE0LjNMMzUyIDMybDAgNzZjLTEwLjItNC0yMC45LTcuMS0zMi05LjFsMC00Ny4xLTE3LjctOC44TDI3NS42IDk2LjR6TTE5Ny41IDEyMWMtMTEuNCA2LjgtMjIgMTQuOS0zMS41IDI0LjFjLTQuNi0uOC05LjMtMS4xLTE0LTEuMWMtMzEuMyAwLTYwLjkgMTcuMS04My4zIDQ3LjRTMzIgMjY0LjMgMzIgMzEyczE0LjMgOTAuMyAzNi43IDEyMC42czUyIDQ3LjQgODMuMyA0Ny40YzIwLjcgMCA0MC42LTcuNSA1OC4xLTIxLjJjNS44LTQuNSAxMy45LTQuNSAxOS43IDBDMjQ3LjQgNDcyLjUgMjY3LjMgNDgwIDI4OCA0ODBzNDAuNi03LjUgNTguMS0yMS4yYzUuOC00LjUgMTMuOS00LjUgMTkuNyAwQzM4My40IDQ3Mi41IDQwMy4zIDQ4MCA0MjQgNDgwYzMxLjMgMCA2MC45LTE3LjEgODMuMy00Ny40UzU0NCAzNTkuNyA1NDQgMzEycy0xNC4zLTkwLjMtMzYuNy0xMjAuNnMtNTItNDcuNC04My4zLTQ3LjRjLTQuNyAwLTkuNCAuNC0xNCAxLjFjLTkuNS05LjItMjAuMS0xNy4zLTMxLjUtMjQuMWMxNC4zLTUuOCAyOS41LTkgNDUuNS05YzQzLjggMCA4Mi4yIDI0LjEgMTA5IDYwLjRzNDMgODUuNyA0MyAxMzkuNnMtMTYuMSAxMDMuMy00MyAxMzkuNlM0NjcuOCA1MTIgNDI0IDUxMmMtMjQuNyAwLTQ3LjgtNy43LTY4LTIwLjljLTIwLjIgMTMuMy00My4zIDIwLjktNjggMjAuOXMtNDcuOC03LjctNjgtMjAuOWMtMjAuMiAxMy4zLTQzLjMgMjAuOS02OCAyMC45Yy00My44IDAtODIuMi0yNC4xLTEwOS02MC40UzAgMzY1LjkgMCAzMTJzMTYuMS0xMDMuMyA0My0xMzkuNlMxMDguMiAxMTIgMTUyIDExMmMxNS45IDAgMzEuMiAzLjIgNDUuNSA5ek0yODggMTYwYy0yNi41IDAtNTAuOCA5LjItNzAgMjQuNmwtMjAtMjVjMjQuNi0xOS44IDU2LTMxLjYgOTAtMzEuNnM2NS40IDExLjggOTAgMzEuNmwtMjAgMjVjLTE5LjItMTUuNC00My41LTI0LjYtNzAtMjQuNnptLTY3LjUgNTRsMzIgNDAgMTAgMTIuNS0yNSAyMC0xMC0xMi41TDIwOCAyNDkuNiAxODguNSAyNzRsLTEwIDEyLjUtMjUtMjAgMTAtMTIuNSAzMi00MEwyMDggMTk4LjQgMjIwLjUgMjE0em0xNjAgMGwzMiA0MCAxMCAxMi41LTI1IDIwLTEwLTEyLjVMMzY4IDI0OS42IDM0OC41IDI3NGwtMTAgMTIuNS0yNS0yMCAxMC0xMi41IDMyLTQwTDM2OCAxOTguNCAzODAuNSAyMTR6TTEwNCAzMTJsLTE1LjggMi4yTDg3IDMwNi4zbDUuNi01LjYgMTYtMTYgOS44LTkuOCAxMS4xIDguM2MwIDAgMCAwIC4xIDBsLjQgLjNjLjQgLjMgMSAuNyAxLjggMS4zYzEuNyAxLjEgNC4zIDIuOSA3LjkgNC45YzcgNC4yIDE3LjYgOS44IDMxLjMgMTUuNWMyNy40IDExLjQgNjcuMyAyMi44IDExNyAyMi44czg5LjUtMTEuNCAxMTctMjIuOGMxMy43LTUuNyAyNC4zLTExLjMgMzEuMy0xNS41YzMuNS0yLjEgNi4yLTMuOCA3LjktNC45Yy45LS42IDEuNS0xIDEuOC0xLjNsLjQtLjNjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMGwxMS4xLTguMyA5LjggOS44IDE2IDE2IDUuNiA1LjYtMS4xIDcuOUw0NzIgMzEyYzE1LjggMi4yIDE1LjggMi4zIDE1LjggMi4zczAgMCAwIDBjMCAwIDAgMCAwIC4xbDAgLjItLjEgLjRjLS4xIC4zLS4xIC44LS4yIDEuM2MtLjIgMS4xLS41IDIuNi0xIDQuNGMtLjkgMy43LTIuNCA4LjctNC43IDE0LjdDNDc3LjEgMzQ3LjMgNDY5IDM2MyA0NTUgMzc4LjZDNDI2LjYgNDEwLjUgMzc2IDQ0MCAyODggNDQwcy0xMzguNi0yOS41LTE2Ny02MS40Yy0xNC0xNS43LTIyLjEtMzEuNC0yNi44LTQzLjNjLTIuMy02LTMuOC0xMS00LjctMTQuN2MtLjUtMS44LS44LTMuMy0xLTQuNGMtLjEtLjUtLjItMS0uMi0xLjNsLS4xLS40IDAtLjJjMCAwIDAgMCAwLS4xYzAgMCAwIDAgMCAwTDEwNCAzMTJ6bTE3LjcgNWMuNiAxLjkgMS40IDQuMiAyLjMgNi43YzMuNiA5LjEgOS45IDIxLjQgMjAuOSAzMy43YzcuNiA4LjUgMTcuNyAxNy40IDMxLjEgMjUuMmwwLTE0LjYgMzIgMCAwIDE2IDAgMTIuN2MyMS4xIDYuOSA0Ny4zIDExLjMgODAgMTEuM2MxNy45IDAgMzMuOC0xLjMgNDgtMy42bDAtMjAuNCAwLTE2IDMyIDAgMCAxNiAwIDEyLjdjMzAuNi0xMCA1MC40LTI1LjEgNjMuMS0zOS40YzExLTEyLjMgMTcuMy0yNC42IDIwLjktMzMuN2MxLTIuNSAxLjgtNC44IDIuMy02LjdsLS41LS41LTEuMyAuOGMtOC4yIDQuOC0yMC4xIDExLjItMzUuMyAxNy41QzM4Ni43IDM0Ny40IDM0Mi42IDM2MCAyODggMzYwYy01LjQgMC0xMC44LS4xLTE2LS40bDAgOC40IDAgMTYtMzIgMCAwLTE2IDAtMTEuM2MtMzIuOC00LjYtNjAuMi0xMy4yLTgxLjItMjEuOWMtMTUuMy02LjMtMjcuMi0xMi43LTM1LjMtMTcuNWwtMS4zLS44LS41IC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const JackOLantern: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M275.6 96.4c-13.6 1-26.8 3.5-39.5 7.3l3.1-6.1 34.5-69L288 0l28.6 14.3L352 32l0 76c-10.2-4-20.9-7.1-32-9.1l0-47.1-17.7-8.8L275.6 96.4zM197.5 121c-11.4 6.8-22 14.9-31.5 24.1c-4.6-.8-9.3-1.1-14-1.1c-31.3 0-60.9 17.1-83.3 47.4S32 264.3 32 312s14.3 90.3 36.7 120.6s52 47.4 83.3 47.4c20.7 0 40.6-7.5 58.1-21.2c5.8-4.5 13.9-4.5 19.7 0C247.4 472.5 267.3 480 288 480s40.6-7.5 58.1-21.2c5.8-4.5 13.9-4.5 19.7 0C383.4 472.5 403.3 480 424 480c31.3 0 60.9-17.1 83.3-47.4S544 359.7 544 312s-14.3-90.3-36.7-120.6s-52-47.4-83.3-47.4c-4.7 0-9.4 .4-14 1.1c-9.5-9.2-20.1-17.3-31.5-24.1c14.3-5.8 29.5-9 45.5-9c43.8 0 82.2 24.1 109 60.4s43 85.7 43 139.6s-16.1 103.3-43 139.6S467.8 512 424 512c-24.7 0-47.8-7.7-68-20.9c-20.2 13.3-43.3 20.9-68 20.9s-47.8-7.7-68-20.9c-20.2 13.3-43.3 20.9-68 20.9c-43.8 0-82.2-24.1-109-60.4S0 365.9 0 312s16.1-103.3 43-139.6S108.2 112 152 112c15.9 0 31.2 3.2 45.5 9zM288 160c-26.5 0-50.8 9.2-70 24.6l-20-25c24.6-19.8 56-31.6 90-31.6s65.4 11.8 90 31.6l-20 25c-19.2-15.4-43.5-24.6-70-24.6zm-67.5 54l32 40 10 12.5-25 20-10-12.5L208 249.6 188.5 274l-10 12.5-25-20 10-12.5 32-40L208 198.4 220.5 214zm160 0l32 40 10 12.5-25 20-10-12.5L368 249.6 348.5 274l-10 12.5-25-20 10-12.5 32-40L368 198.4 380.5 214zM104 312l-15.8 2.2L87 306.3l5.6-5.6 16-16 9.8-9.8 11.1 8.3c0 0 0 0 .1 0l.4 .3c.4 .3 1 .7 1.8 1.3c1.7 1.1 4.3 2.9 7.9 4.9c7 4.2 17.6 9.8 31.3 15.5c27.4 11.4 67.3 22.8 117 22.8s89.5-11.4 117-22.8c13.7-5.7 24.3-11.3 31.3-15.5c3.5-2.1 6.2-3.8 7.9-4.9c.9-.6 1.5-1 1.8-1.3l.4-.3c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l11.1-8.3 9.8 9.8 16 16 5.6 5.6-1.1 7.9L472 312c15.8 2.2 15.8 2.3 15.8 2.3s0 0 0 0c0 0 0 0 0 .1l0 .2-.1 .4c-.1 .3-.1 .8-.2 1.3c-.2 1.1-.5 2.6-1 4.4c-.9 3.7-2.4 8.7-4.7 14.7C477.1 347.3 469 363 455 378.6C426.6 410.5 376 440 288 440s-138.6-29.5-167-61.4c-14-15.7-22.1-31.4-26.8-43.3c-2.3-6-3.8-11-4.7-14.7c-.5-1.8-.8-3.3-1-4.4c-.1-.5-.2-1-.2-1.3l-.1-.4 0-.2c0 0 0 0 0-.1c0 0 0 0 0 0L104 312zm17.7 5c.6 1.9 1.4 4.2 2.3 6.7c3.6 9.1 9.9 21.4 20.9 33.7c7.6 8.5 17.7 17.4 31.1 25.2l0-14.6 32 0 0 16 0 12.7c21.1 6.9 47.3 11.3 80 11.3c17.9 0 33.8-1.3 48-3.6l0-20.4 0-16 32 0 0 16 0 12.7c30.6-10 50.4-25.1 63.1-39.4c11-12.3 17.3-24.6 20.9-33.7c1-2.5 1.8-4.8 2.3-6.7l-.5-.5-1.3 .8c-8.2 4.8-20.1 11.2-35.3 17.5C386.7 347.4 342.6 360 288 360c-5.4 0-10.8-.1-16-.4l0 8.4 0 16-32 0 0-16 0-11.3c-32.8-4.6-60.2-13.2-81.2-21.9c-15.3-6.3-27.2-12.7-35.3-17.5l-1.3-.8-.5 .5z" />
    </Icon>
);

export default JackOLantern;