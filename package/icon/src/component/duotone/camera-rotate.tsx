
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-rotate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-rotate?s=duotone camera-rotate}
 * @preview ![camera-rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxNjBsMCAyNTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yNTZjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTc0LjcgMEw0MjYuOSA2NC44QzQyMC40IDQ1LjIgNDAyLjEgMzIgMzgxLjQgMzJMMjU4LjYgMzJjLTIwLjcgMC0zOSAxMy4yLTQ1LjUgMzIuOEwyMDIuNyA5NiAxMjggOTZjLTM1LjMgMC02NCAyOC43LTY0IDY0ek0xOTIgMzIwYzAtOC44IDcuMi0xNiAxNi0xNmw3Ni43IDBjNi4yIDAgMTEuMyA1LjEgMTEuMyAxMS4zYzAgMy0xLjIgNS45LTMuMyA4TDI2OSAzNDdjMTMuNiAxMy40IDMxLjkgMjEgNTEgMjFjMTkuMiAwIDM3LjctNy42IDUxLjMtMjEuM0wzOTEgMzI3YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwczkuNCAyNC42IDAgMzMuOWwtMTkuNyAxOS43QzM4Mi42IDQwMy4zIDM1MiA0MTYgMzIwIDQxNmMtMzEuOCAwLTYyLjQtMTIuNi04NS0zNWwtMjMuNyAyMy43Yy0yLjEgMi4xLTUgMy4zLTggMy4zYy02LjIgMC0xMS4zLTUuMS0xMS4zLTExLjNsMC03Ni43em0yMy0xMDVsMTkuNy0xOS43QzI1Ny40IDE3Mi43IDI4OCAxNjAgMzIwIDE2MGMzMS44IDAgNjIuNCAxMi42IDg1IDM1bDIzLjctMjMuN2MyLjEtMi4xIDUtMy4zIDgtMy4zYzYuMiAwIDExLjMgNS4xIDExLjMgMTEuM2wwIDc2LjdjMCA4LjgtNy4yIDE2LTE2IDE2bC03Ni43IDBjLTYuMiAwLTExLjMtNS4xLTExLjMtMTEuM2MwLTMgMS4yLTUuOSAzLjMtOEwzNzEgMjI5Yy0xMy42LTEzLjQtMzEuOS0yMS01MS0yMWMtMTkuMiAwLTM3LjcgNy42LTUxLjMgMjEuM0wyNDkgMjQ5Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMHMtOS40LTI0LjYgMC0zMy45eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDE3OS4zbDAgNzYuN2MwIDguOC03LjIgMTYtMTYgMTZsLTc2LjcgMGMtNi4yIDAtMTEuMy01LjEtMTEuMy0xMS4zYzAtMyAxLjItNS45IDMuMy04TDM3MSAyMjljLTEzLjYtMTMuNC0zMS45LTIxLTUxLTIxYy0xOS4yIDAtMzcuNyA3LjYtNTEuMyAyMS4zTDI0OSAyNDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwcy05LjQtMjQuNiAwLTMzLjlsMTkuNy0xOS43QzI1Ny40IDE3Mi43IDI4OCAxNjAgMzIwIDE2MGMzMS44IDAgNjIuNCAxMi42IDg1IDM1bDIzLjctMjMuN2MyLjEtMi4xIDUtMy4zIDgtMy4zYzYuMiAwIDExLjMgNS4xIDExLjMgMTEuM3pNMTkyIDM5Ni43bDAtNzYuN2MwLTguOCA3LjItMTYgMTYtMTZsNzYuNyAwYzYuMiAwIDExLjMgNS4xIDExLjMgMTEuM2MwIDMtMS4yIDUuOS0zLjMgOEwyNjkgMzQ3YzEzLjYgMTMuNCAzMS45IDIxIDUxIDIxYzE5LjIgMCAzNy43LTcuNiA1MS4zLTIxLjNMMzkxIDMyN2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMHM5LjQgMjQuNiAwIDMzLjlsLTE5LjcgMTkuN0MzODIuNiA0MDMuMyAzNTIgNDE2IDMyMCA0MTZjLTMxLjggMC02Mi40LTEyLjYtODUtMzVsLTIzLjcgMjMuN2MtMi4xIDIuMS01IDMuMy04IDMuM2MtNi4yIDAtMTEuMy01LjEtMTEuMy0xMS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CameraRotate: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 256c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L426.9 64.8C420.4 45.2 402.1 32 381.4 32L258.6 32c-20.7 0-39 13.2-45.5 32.8L202.7 96 128 96c-35.3 0-64 28.7-64 64zM192 320c0-8.8 7.2-16 16-16l76.7 0c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8L269 347c13.6 13.4 31.9 21 51 21c19.2 0 37.7-7.6 51.3-21.3L391 327c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-19.7 19.7C382.6 403.3 352 416 320 416c-31.8 0-62.4-12.6-85-35l-23.7 23.7c-2.1 2.1-5 3.3-8 3.3c-6.2 0-11.3-5.1-11.3-11.3l0-76.7zm23-105l19.7-19.7C257.4 172.7 288 160 320 160c31.8 0 62.4 12.6 85 35l23.7-23.7c2.1-2.1 5-3.3 8-3.3c6.2 0 11.3 5.1 11.3 11.3l0 76.7c0 8.8-7.2 16-16 16l-76.7 0c-6.2 0-11.3-5.1-11.3-11.3c0-3 1.2-5.9 3.3-8L371 229c-13.6-13.4-31.9-21-51-21c-19.2 0-37.7 7.6-51.3 21.3L249 249c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z" />
            <path d="M448 179.3l0 76.7c0 8.8-7.2 16-16 16l-76.7 0c-6.2 0-11.3-5.1-11.3-11.3c0-3 1.2-5.9 3.3-8L371 229c-13.6-13.4-31.9-21-51-21c-19.2 0-37.7 7.6-51.3 21.3L249 249c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l19.7-19.7C257.4 172.7 288 160 320 160c31.8 0 62.4 12.6 85 35l23.7-23.7c2.1-2.1 5-3.3 8-3.3c6.2 0 11.3 5.1 11.3 11.3zM192 396.7l0-76.7c0-8.8 7.2-16 16-16l76.7 0c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8L269 347c13.6 13.4 31.9 21 51 21c19.2 0 37.7-7.6 51.3-21.3L391 327c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-19.7 19.7C382.6 403.3 352 416 320 416c-31.8 0-62.4-12.6-85-35l-23.7 23.7c-2.1 2.1-5 3.3-8 3.3c-6.2 0-11.3-5.1-11.3-11.3z" />
    </Icon>
);

export default CameraRotate;