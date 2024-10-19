
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bee` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bee?s=sharp-duotone-solid bee}
 * @preview ![bee](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOEMwIDE0Ni4xIDU3LjMgOTYgMTI4IDk2YzMwLjUgMCA1OC41IDkuMyA4MC41IDI0LjljMS4xIDkuOCAzLjkgMTkgOC4yIDI3LjRjMi4xIDQuMiA0LjYgOC4yIDcuNSAxMS45YzEuNCAxLjkgMi45IDMuNyA0LjUgNS40Yy44IC45IDEuNiAxLjcgMi40IDIuNXMxLjcgMS42IDIuNSAyLjRjLTM3LjkgMTUuNS02Ny43IDQ2LjYtODEuNCA4NS40Yy0zLjYgMTAuMi02LjEgMjAuOS03LjMgMzJjLS42IDUuMy0uOSAxMC42LS45IDE2YzAgMSAwIDIuMSAuMSAzLjJsMCAuNWMwIC43IC4xIDEuNCAuMSAyLjNjLjIgMyAuNSA2IC45IDljLTUuNiAuNi0xMS4zIDEtMTcuMSAxQzU3LjMgMzIwIDAgMjY5LjkgMCAyMDh6bTM0Mi40LTM3LjRjMTMuNy0xMi43IDIyLjktMzAuMiAyNS4xLTQ5LjdjMjItMTUuNiA1MC0yNC45IDgwLjUtMjQuOWM3MC43IDAgMTI4IDUwLjEgMTI4IDExMnMtNTcuMyAxMTItMTI4IDExMmMtNS44IDAtMTEuNS0uMy0xNy4xLTFjLjItMS40IC40LTIuOCAuNS00LjJjLjEtLjkgLjEtMS41IC4yLTEuOWMuMS0xLjIgLjEtMi4xIC4yLTIuOGMwLS45IC4xLTEuNyAuMS0yLjRsMC0uNGMwLTEuMSAuMS0yLjIgLjEtMy4zYzAtNS40LS4zLTEwLjctLjktMTZjLTEuMi0xMS4xLTMuNy0yMS44LTcuMy0zMmMtMTMuNy0zOC44LTQzLjUtNjkuOS04MS40LTg1LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjcuMyAxMi43TDIxNiAxLjQgMTkzLjQgMjRsMTEuMyAxMS4zIDIzLjUgMjMuNUMyMTUuNiA3MyAyMDggOTEuNiAyMDggMTEyYzAgMjMuMiA5LjggNDQgMjUuNiA1OC42Yy0zNy45IDE1LjUtNjcuNyA0Ni42LTgxLjQgODUuNGwyNzEuNiAwYy0xMy43LTM4LjgtNDMuNS02OS45LTgxLjQtODUuNEMzNTguMiAxNTYgMzY4IDEzNS4yIDM2OCAxMTJjMC0yMC40LTcuNi0zOS0yMC4yLTUzLjJsMjMuNS0yMy41TDM4Mi42IDI0IDM2MCAxLjQgMzQ4LjcgMTIuNyAzMjEuOSAzOS41QzMxMS42IDM0LjcgMzAwLjEgMzIgMjg4IDMycy0yMy42IDIuNy0zMy45IDcuNUwyMjcuMyAxMi43ek00MzEuMSAyODhsLTI4Ni4yIDBjLS42IDUuMy0uOSAxMC42LS45IDE2YzAgMTAuNSAxLjcgMjEuMyA0LjggMzJsMjc4LjQgMGMzLjEtMTAuNyA0LjgtMjEuNSA0LjgtMzJjMC01LjQtLjMtMTAuNy0uOS0xNnptLTE2LjggODBsLTI1Mi42IDBjOC40IDE2LjYgMTkuMiAzMi44IDMwLjkgNDhsMTkwLjggMGMxMS43LTE1LjIgMjIuNS0zMS40IDMwLjktNDh6bS01OCA4MGwtMTM2LjcgMGMzNC43IDM3LjkgNjguNCA2NCA2OC40IDY0czMzLjYtMjYuMSA2OC40LTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bee: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 208C0 146.1 57.3 96 128 96c30.5 0 58.5 9.3 80.5 24.9c1.1 9.8 3.9 19 8.2 27.4c2.1 4.2 4.6 8.2 7.5 11.9c1.4 1.9 2.9 3.7 4.5 5.4c.8 .9 1.6 1.7 2.4 2.5s1.7 1.6 2.5 2.4c-37.9 15.5-67.7 46.6-81.4 85.4c-3.6 10.2-6.1 20.9-7.3 32c-.6 5.3-.9 10.6-.9 16c0 1 0 2.1 .1 3.2l0 .5c0 .7 .1 1.4 .1 2.3c.2 3 .5 6 .9 9c-5.6 .6-11.3 1-17.1 1C57.3 320 0 269.9 0 208zm342.4-37.4c13.7-12.7 22.9-30.2 25.1-49.7c22-15.6 50-24.9 80.5-24.9c70.7 0 128 50.1 128 112s-57.3 112-128 112c-5.8 0-11.5-.3-17.1-1c.2-1.4 .4-2.8 .5-4.2c.1-.9 .1-1.5 .2-1.9c.1-1.2 .1-2.1 .2-2.8c0-.9 .1-1.7 .1-2.4l0-.4c0-1.1 .1-2.2 .1-3.3c0-5.4-.3-10.7-.9-16c-1.2-11.1-3.7-21.8-7.3-32c-13.7-38.8-43.5-69.9-81.4-85.4z" />
            <path d="M227.3 12.7L216 1.4 193.4 24l11.3 11.3 23.5 23.5C215.6 73 208 91.6 208 112c0 23.2 9.8 44 25.6 58.6c-37.9 15.5-67.7 46.6-81.4 85.4l271.6 0c-13.7-38.8-43.5-69.9-81.4-85.4C358.2 156 368 135.2 368 112c0-20.4-7.6-39-20.2-53.2l23.5-23.5L382.6 24 360 1.4 348.7 12.7 321.9 39.5C311.6 34.7 300.1 32 288 32s-23.6 2.7-33.9 7.5L227.3 12.7zM431.1 288l-286.2 0c-.6 5.3-.9 10.6-.9 16c0 10.5 1.7 21.3 4.8 32l278.4 0c3.1-10.7 4.8-21.5 4.8-32c0-5.4-.3-10.7-.9-16zm-16.8 80l-252.6 0c8.4 16.6 19.2 32.8 30.9 48l190.8 0c11.7-15.2 22.5-31.4 30.9-48zm-58 80l-136.7 0c34.7 37.9 68.4 64 68.4 64s33.6-26.1 68.4-64z" />
    </Icon>
);

export default Bee;