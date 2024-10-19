
import { Icon } from "../../index";

/**
 * A component that renders the `money-check-dollar-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-dollar-pen?s=light money-check-dollar-pen}
 * @preview ![money-check-dollar-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDk2TDY0IDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwyNzQuMiAwLTggMzJMNjQgNDQ4Yy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDEyOEMwIDkyLjcgMjguNyA2NCA2NCA2NGw0NDggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDY0Yy0xMC45LS4zLTIxLjggMS41LTMyIDUuNmwwLTY5LjZjMC0xNy43LTE0LjMtMzItMzItMzJ6TTI1NiAzMDRjMC04LjggNy4yLTE2IDE2LTE2bDk2IDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZsLTk2IDBjLTguOCAwLTE2LTcuMi0xNi0xNnptMTYtMTEybDE5MiAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0xOTIgMGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnpNMTQ0IDE0NGM4LjggMCAxNiA3LjIgMTYgMTZsMCA5LjZjNS45IDEgMTkgMy41IDI0LjEgNC45YzguNSAyLjMgMTMuNiAxMSAxMS4zIDE5LjZzLTExIDEzLjYtMTkuNiAxMS4zYy00LTEuMS0xNy43LTMuNy0yMi4xLTQuNGMtMTIuOC0yLTIzLjYtLjQtMzAuOSAyLjljLTcuMiAzLjMtOS45IDcuNS0xMC41IDExYy0uNyA0LjEtLjEgNi4yIC41IDcuNGMuNiAxLjQgMiAzLjEgNSA1LjFjNi43IDQuNiAxNy4xIDcuOCAzMSAxMmwuNiAuMnMwIDAgMCAwYzEyLjMgMy43IDI3LjkgOC40IDM5LjUgMTYuOWM2LjMgNC41IDEyIDEwLjYgMTUuNiAxOC44YzMuNiA4LjMgNC40IDE3LjQgMi43IDI3LjJjLTMgMTcuNS0xNC42IDI5LjQtMjkuMyAzNS43Yy01LjYgMi40LTExLjYgNC0xNy45IDQuOWwwIDguOWMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTkuNmMtOS40LTEuNy0yMy41LTYuNi0zMi40LTkuNmMwIDAgMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMGMtMS44LS42LTMuMy0xLjEtNC42LTEuNmMtOC40LTIuOC0xMi45LTExLjktMTAuMS0yMC4yczExLjktMTIuOSAyMC4yLTEwLjFjMS45IC42IDQgMS4zIDYuMSAyLjFjMCAwIDAgMCAwIDBzMCAwIDAgMGM5LjUgMy4yIDIwLjcgNyAyNy4xIDguMWMxMy4zIDIuMSAyNCAuOCAzMS0yLjJjNi41LTIuOCA5LjUtNi43IDEwLjMtMTEuOGMuOC00LjcgLjItNy4zLS41LTljLS43LTEuNy0yLjItMy42LTUuMS01LjdjLTYuNS00LjgtMTYuNy04LjEtMzAuNS0xMi4zbC0yLS42czAgMCAwIDBjLTExLjktMy42LTI2LjYtOC0zNy43LTE1LjVjLTYuMi00LjItMTIuMi0xMC0xNS45LTE3LjljLTMuOC04LjEtNC43LTE3LjEtMy4xLTI2LjZjMi45LTE2LjcgMTQuNy0yOC40IDI4LjgtMzQuN2M1LjYtMi42IDExLjgtNC40IDE4LjMtNS40bDAtOS4zYzAtOC44IDcuMi0xNiAxNi0xNnpNNTgyLjggMjY0Yy02LjItNi4yLTE2LjQtNi4yLTIyLjYgMGwtMjQuOCAyNC44IDQwIDQwTDYwMC4yIDMwNGM2LjItNi4yIDYuMi0xNi40IDAtMjIuNkw1ODIuOCAyNjR6TTQwNi41IDQxNy43Yy0yLjEgMi4xLTMuNSA0LjYtNC4yIDcuNGwtMTIuMyA0OSA0OS0xMi4zYzIuOC0uNyA1LjQtMi4yIDcuNC00LjJMNTUyLjcgMzUxLjRsLTQwLTQwTDQwNi41IDQxNy43ek01MzcuNSAyNDEuNGMxOC43LTE4LjcgNDkuMS0xOC43IDY3LjkgMGwxNy40IDE3LjRjMTguNyAxOC43IDE4LjcgNDkuMSAwIDY3LjlMNDY5LjEgNDgwLjNjLTYuMiA2LjItMTMuOSAxMC41LTIyLjMgMTIuNmwtNzQuOSAxOC43Yy01LjUgMS40LTExLjItLjItMTUuMi00LjJzLTUuNi05LjctNC4yLTE1LjJsMTguNy03NC45YzIuMS04LjQgNi41LTE2LjEgMTIuNi0yMi4zTDUzNy41IDI0MS40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MoneyCheckDollarPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 96L64 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l274.2 0-8 32L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64c-10.9-.3-21.8 1.5-32 5.6l0-69.6c0-17.7-14.3-32-32-32zM256 304c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm16-112l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM144 144c8.8 0 16 7.2 16 16l0 9.6c5.9 1 19 3.5 24.1 4.9c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-4-1.1-17.7-3.7-22.1-4.4c-12.8-2-23.6-.4-30.9 2.9c-7.2 3.3-9.9 7.5-10.5 11c-.7 4.1-.1 6.2 .5 7.4c.6 1.4 2 3.1 5 5.1c6.7 4.6 17.1 7.8 31 12l.6 .2s0 0 0 0c12.3 3.7 27.9 8.4 39.5 16.9c6.3 4.5 12 10.6 15.6 18.8c3.6 8.3 4.4 17.4 2.7 27.2c-3 17.5-14.6 29.4-29.3 35.7c-5.6 2.4-11.6 4-17.9 4.9l0 8.9c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-9.6c-9.4-1.7-23.5-6.6-32.4-9.6c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c-1.8-.6-3.3-1.1-4.6-1.6c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c9.5 3.2 20.7 7 27.1 8.1c13.3 2.1 24 .8 31-2.2c6.5-2.8 9.5-6.7 10.3-11.8c.8-4.7 .2-7.3-.5-9c-.7-1.7-2.2-3.6-5.1-5.7c-6.5-4.8-16.7-8.1-30.5-12.3l-2-.6s0 0 0 0c-11.9-3.6-26.6-8-37.7-15.5c-6.2-4.2-12.2-10-15.9-17.9c-3.8-8.1-4.7-17.1-3.1-26.6c2.9-16.7 14.7-28.4 28.8-34.7c5.6-2.6 11.8-4.4 18.3-5.4l0-9.3c0-8.8 7.2-16 16-16zM582.8 264c-6.2-6.2-16.4-6.2-22.6 0l-24.8 24.8 40 40L600.2 304c6.2-6.2 6.2-16.4 0-22.6L582.8 264zM406.5 417.7c-2.1 2.1-3.5 4.6-4.2 7.4l-12.3 49 49-12.3c2.8-.7 5.4-2.2 7.4-4.2L552.7 351.4l-40-40L406.5 417.7zM537.5 241.4c18.7-18.7 49.1-18.7 67.9 0l17.4 17.4c18.7 18.7 18.7 49.1 0 67.9L469.1 480.3c-6.2 6.2-13.9 10.5-22.3 12.6l-74.9 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.9c2.1-8.4 6.5-16.1 12.6-22.3L537.5 241.4z" />
    </Icon>
);

export default MoneyCheckDollarPen;