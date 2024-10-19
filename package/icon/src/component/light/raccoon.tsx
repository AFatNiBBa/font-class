
import { Icon } from "../../index";

/**
 * A component that renders the `raccoon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raccoon?s=light raccoon}
 * @preview ![raccoon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjgzLjIgNTcuMUwyNjYuNiA3Ny42YzI0LjYtMTIuNCA1My41LTQuNyA2OS40IDE1LjVjMTUuOS0yMC4yIDQ0LjgtMjcuOSA2OS40LTE1LjVMMzg4LjggNTcuMUMzNzUuOSA0MS4yIDM1Ni41IDMyIDMzNiAzMnMtMzkuOSA5LjItNTIuOCAyNS4xek0zMzYgMTYyLjZjLTIuNiAzLjQtNS43IDYuNS05LjEgOS4ybC0zNi43IDI5LjRjMi4yIDEuMyA0LjQgMi43IDYuNSA0LjFMMzEyIDIxNS40Yy4zLTEzIDEwLjktMjMuNCAyNC0yMy40czIzLjcgMTAuNCAyNCAyMy40bDE1LjMtMTAuMmMyLjEtMS40IDQuMy0yLjggNi42LTQuMWwtMzYuNy0yOS40Yy0zLjQtMi43LTYuNS01LjgtOS4xLTkuMnptNzkuMSAyNC4ybDM0LjQtMTAuM2M4LjYtMi42IDE0LjUtMTAuNSAxNC41LTE5LjVjMC0yLjgtLjYtNS41LTEuNy04LjFsLTY5LjYtNDEuOGMtMTQuNC04LjYtMzIuOS0uNC0zNi4yIDE2Yy0xLjggOC45IDEuNSAxOCA4LjYgMjMuN2w1MCA0MHptLTEwOC4yLTQwYzcuMS01LjcgMTAuNC0xNC44IDguNi0yMy43Yy0zLjMtMTYuNC0yMS45LTI0LjctMzYuMi0xNmwtNjkuNiA0MS44Yy0xLjEgMi41LTEuNyA1LjMtMS43IDguMWMwIDkgNS45IDE2LjkgMTQuNSAxOS41bDM0LjQgMTAuMyA1MC00MHpNMzM2IDBjMTYgMCAzMS41IDMuOCA0NS4zIDEwLjlsNDQuMS05LjhjMy4yLS43IDYuNS0xLjEgOS43LTEuMWwxLjMgMGMyNCAwIDQzLjUgMTkuNSA0My41IDQzLjVjMCA0LjctLjggOS4zLTIuMiAxMy44TDQ2My45IDk4LjhsMjAuMyAyNWM3LjYgOS4zIDExLjcgMjEgMTEuNyAzM2MwIDIzLjEtMTUuMiA0My41LTM3LjMgNTAuMmwtMzUuOCAxMC43Yy0xMC42IDMuMi0yMC42IDcuOS0yOS44IDE0bC0xOC44IDEyLjZDMzYyLjkgMjUyIDM0OS42IDI1NiAzMzYgMjU2cy0yNi45LTQtMzguMi0xMS42TDI3OSAyMzEuOWMtOS4yLTYuMS0xOS4yLTEwLjktMjkuOC0xNGwtMzUuOC0xMC43Yy0yMi4yLTYuNi0zNy4zLTI3LTM3LjMtNTAuMmMwLTEyIDQuMS0yMy43IDExLjctMzNsMjAuMy0yNUwxOTQuMiA1Ny4zYy0xLjUtNC40LTIuMi05LjEtMi4yLTEzLjhDMTkyIDE5LjUgMjExLjUgMCAyMzUuNSAwbDEuMyAwYzMuMyAwIDYuNSAuNCA5LjcgMS4xbDQ0LjEgOS44QzMwNC41IDMuOCAzMjAgMCAzMzYgMHpNMjM5LjYgMzIuM2MtLjktLjItMS44LS4zLTIuOC0uM2wtMS4zIDBjLTYuNCAwLTExLjUgNS4yLTExLjUgMTEuNWMwIDEuMiAuMiAyLjUgLjYgMy42TDIzMiA2OS40IDI1OC40IDM3bC4zLS40LTE5LjEtNC4yem0xNzQgNC42TDQ0MCA2OS40bDcuNC0yMi4yYy40LTEuMiAuNi0yLjQgLjYtMy42YzAtNi40LTUuMi0xMS41LTExLjUtMTEuNWwtMS4zIDBjLS45IDAtMS45IC4xLTIuOCAuM2wtMTkuMSA0LjIgLjMgLjR6TTEyOCAyNjcuMWMxNC0xNi44IDMwLjYtMzEuNCA0OS4xLTQzLjFjNy45IDYuMSAxNyAxMC44IDI3IDEzLjhsOS4zIDIuOEMxNTMuNSAyNjguNiAxMTIgMzI5LjUgMTEyIDQwMGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmMwLTE2LjUgMS45LTMyLjYgNS42LTQ4TDMyIDM1MmwwIDQ4YzAgNDQuMiAzNS44IDgwIDgwIDgwbDIwOCAwYzAtMTcuNy0xNC4zLTMyLTMyLTMybC00OCAwYy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2bDQ4IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsOTYgMGMwLTE3LjctMTQuMy0zMi0zMi0zMmwtMTYgMGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmwxNiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMTZjMCA4LjgtNy4yIDE2LTE2IDE2bC0zNTIgMEM1MC4xIDUxMiAwIDQ2MS45IDAgNDAwTDAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJzNjQgMjguNyA2NCA2NGwwIDE3MS4xem0zMjAgMjcuMmMwLTE3LTYuOS0zMy4xLTE4LjktNDQuOGMxLS4zIDItLjYgMi45LS45bDMwLjQtOS4xYzExLjMgMTUuOSAxNy42IDM1IDE3LjYgNTQuOWMwIDMxLjQtMTUuNiA2MC43LTQxLjUgNzguNEw0MjcuNiAzODBjLTE4LjggMTIuNy00My45IDEwLjMtNjAtNS43Yy0yMS4xLTIxLjEtMTcuNi01Ni4yIDcuMi03Mi44bDE2LjMtMTAuOGM3LjQtNC45IDE3LjMtMi45IDIyLjIgNC40czIuOSAxNy4zLTQuNCAyMi4ybC0xNi4zIDEwLjhjLTggNS4zLTkuMSAxNi43LTIuMyAyMy41YzUuMiA1LjIgMTMuMyA2IDE5LjQgMS44bDEwLjgtNy4zYzE3LjItMTEuNyAyNy41LTMxLjEgMjcuNS01MS45ek05NS45IDMyMGwuMS0uMUw5NiAyNTZsLTY0IDAgMCA2NCA2My45IDB6TTk2IDE2MGwtNjQgMCAwIDY0IDY0IDAgMC02NHptMC0zMmwwLTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyUzMyIDc4LjMgMzIgOTZsMCAzMiA2NCAwek0zMDQuNCAzNzQuMmMtMTYuMSAxNi4xLTQxLjMgMTguNS02MC4yIDUuN0wxOTkgMzQ5LjJjLTcuMy01LTkuMi0xNC45LTQuMy0yMi4yczE0LjktOS4yIDIyLjItNC4zbDQ1LjMgMzAuN2M2LjEgNC4yIDE0LjMgMy40IDE5LjYtMS45YzYuOC02LjggNS44LTE4LjItMi4zLTIzLjdMMjQ0LjMgMzA0Yy03LjMtNS05LjItMTQuOS00LjMtMjIuMnMxNC45LTkuMiAyMi4yLTQuM2wzNS4zIDIzLjljMjQuNiAxNi43IDI4IDUxLjcgNi45IDcyLjh6TTI3MiAxMjhhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHptMTEyLTE2YTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Raccoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M283.2 57.1L266.6 77.6c24.6-12.4 53.5-4.7 69.4 15.5c15.9-20.2 44.8-27.9 69.4-15.5L388.8 57.1C375.9 41.2 356.5 32 336 32s-39.9 9.2-52.8 25.1zM336 162.6c-2.6 3.4-5.7 6.5-9.1 9.2l-36.7 29.4c2.2 1.3 4.4 2.7 6.5 4.1L312 215.4c.3-13 10.9-23.4 24-23.4s23.7 10.4 24 23.4l15.3-10.2c2.1-1.4 4.3-2.8 6.6-4.1l-36.7-29.4c-3.4-2.7-6.5-5.8-9.1-9.2zm79.1 24.2l34.4-10.3c8.6-2.6 14.5-10.5 14.5-19.5c0-2.8-.6-5.5-1.7-8.1l-69.6-41.8c-14.4-8.6-32.9-.4-36.2 16c-1.8 8.9 1.5 18 8.6 23.7l50 40zm-108.2-40c7.1-5.7 10.4-14.8 8.6-23.7c-3.3-16.4-21.9-24.7-36.2-16l-69.6 41.8c-1.1 2.5-1.7 5.3-1.7 8.1c0 9 5.9 16.9 14.5 19.5l34.4 10.3 50-40zM336 0c16 0 31.5 3.8 45.3 10.9l44.1-9.8c3.2-.7 6.5-1.1 9.7-1.1l1.3 0c24 0 43.5 19.5 43.5 43.5c0 4.7-.8 9.3-2.2 13.8L463.9 98.8l20.3 25c7.6 9.3 11.7 21 11.7 33c0 23.1-15.2 43.5-37.3 50.2l-35.8 10.7c-10.6 3.2-20.6 7.9-29.8 14l-18.8 12.6C362.9 252 349.6 256 336 256s-26.9-4-38.2-11.6L279 231.9c-9.2-6.1-19.2-10.9-29.8-14l-35.8-10.7c-22.2-6.6-37.3-27-37.3-50.2c0-12 4.1-23.7 11.7-33l20.3-25L194.2 57.3c-1.5-4.4-2.2-9.1-2.2-13.8C192 19.5 211.5 0 235.5 0l1.3 0c3.3 0 6.5 .4 9.7 1.1l44.1 9.8C304.5 3.8 320 0 336 0zM239.6 32.3c-.9-.2-1.8-.3-2.8-.3l-1.3 0c-6.4 0-11.5 5.2-11.5 11.5c0 1.2 .2 2.5 .6 3.6L232 69.4 258.4 37l.3-.4-19.1-4.2zm174 4.6L440 69.4l7.4-22.2c.4-1.2 .6-2.4 .6-3.6c0-6.4-5.2-11.5-11.5-11.5l-1.3 0c-.9 0-1.9 .1-2.8 .3l-19.1 4.2 .3 .4zM128 267.1c14-16.8 30.6-31.4 49.1-43.1c7.9 6.1 17 10.8 27 13.8l9.3 2.8C153.5 268.6 112 329.5 112 400c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-16.5 1.9-32.6 5.6-48L32 352l0 48c0 44.2 35.8 80 80 80l208 0c0-17.7-14.3-32-32-32l-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0c35.3 0 64 28.7 64 64l96 0c0-17.7-14.3-32-32-32l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c35.3 0 64 28.7 64 64l0 16c0 8.8-7.2 16-16 16l-352 0C50.1 512 0 461.9 0 400L0 96C0 60.7 28.7 32 64 32s64 28.7 64 64l0 171.1zm320 27.2c0-17-6.9-33.1-18.9-44.8c1-.3 2-.6 2.9-.9l30.4-9.1c11.3 15.9 17.6 35 17.6 54.9c0 31.4-15.6 60.7-41.5 78.4L427.6 380c-18.8 12.7-43.9 10.3-60-5.7c-21.1-21.1-17.6-56.2 7.2-72.8l16.3-10.8c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2l-16.3 10.8c-8 5.3-9.1 16.7-2.3 23.5c5.2 5.2 13.3 6 19.4 1.8l10.8-7.3c17.2-11.7 27.5-31.1 27.5-51.9zM95.9 320l.1-.1L96 256l-64 0 0 64 63.9 0zM96 160l-64 0 0 64 64 0 0-64zm0-32l0-32c0-17.7-14.3-32-32-32S32 78.3 32 96l0 32 64 0zM304.4 374.2c-16.1 16.1-41.3 18.5-60.2 5.7L199 349.2c-7.3-5-9.2-14.9-4.3-22.2s14.9-9.2 22.2-4.3l45.3 30.7c6.1 4.2 14.3 3.4 19.6-1.9c6.8-6.8 5.8-18.2-2.3-23.7L244.3 304c-7.3-5-9.2-14.9-4.3-22.2s14.9-9.2 22.2-4.3l35.3 23.9c24.6 16.7 28 51.7 6.9 72.8zM272 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Raccoon;