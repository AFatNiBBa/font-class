
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-pointer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-pointer?s=duotone globe-pointer}
 * @preview ![globe-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwLTIyLjEgMi44LTQzLjUgOC4xLTY0bDEyMy4xIDBjLTEuOSAxOC40LTIuOSAzNy40LTMuMSA1N0wyMC40IDI4MC42Yy03LjEgMi4xLTEzLjEgNS41LTE4LjEgOS45Qy44IDI3OS4yIDAgMjY3LjcgMCAyNTZ6bTE4LjYtOTZDNDguNiA4NS45IDExMi4yIDI5LjEgMTkwLjYgOC40QzE2NS4xIDQyLjYgMTQ1LjMgOTYuMSAxMzUuMyAxNjBMMTguNiAxNjB6bTE0MS42IDc5LjVjLjQtMTYuMyAxLjUtMzIuMiAzLjEtNDcuNWwxODUuMyAwYzIuMiAyMC40IDMuMyA0MS44IDMuMyA2NHMtMS4yIDQzLjYtMy4zIDY0bC02Ni44IDAgMTIuNi00Mi44YzEwLjctMzYuNC0yMy4xLTcwLjMtNTkuNi01OS42bC03NC42IDIxLjl6bTcuNS03OS41YzYuMS0zNi40IDE1LjUtNjguNiAyNy05NC43YzEwLjUtMjMuNiAyMi4yLTQwLjcgMzMuNS01MS41QzIzOS40IDMuMiAyNDguNyAwIDI1NiAwczE2LjYgMy4yIDI3LjggMTMuOGMxMS4zIDEwLjggMjMgMjcuOSAzMy41IDUxLjVjMTEuNiAyNiAyMC45IDU4LjIgMjcgOTQuN2wtMTc2LjYgMHptNjEgMzM4LjZjMS0yLjIgMS45LTQuNiAyLjctNy4xTDI3Mi40IDM1Mmw3MS45IDBjLTYuMSAzNi40LTE1LjUgNjguNi0yNyA5NC42Yy0xMC41IDIzLjYtMjIuMiA0MC43LTMzLjUgNTEuNUMyNzIuNiA1MDguOCAyNjMuMyA1MTIgMjU2IDUxMmMtNy4yIDAtMTYuMy0zLjEtMjcuMy0xMy40ek0zMjEuNCA4LjRjNzguMyAyMC43IDE0MiA3Ny41IDE3MS45IDE1MS42bC0xMTYuNyAwYy0xMC02My45LTI5LjgtMTE3LjQtNTUuMy0xNTEuNnptMCA0OTUuMWMyNS41LTM0LjIgNDUuMi04Ny43IDU1LjMtMTUxLjZsMTE2LjcgMGMtMzAgNzQuMS05My42IDEzMC45LTE3MS45IDE1MS42ek0zODAuOCAxOTJsMTIzLjEgMGM1LjMgMjAuNSA4LjEgNDEuOSA4LjEgNjRzLTIuOCA0My41LTguMSA2NGwtMTIzLjEgMGMyLjEtMjAuNiAzLjItNDIgMy4yLTY0cy0xLjEtNDMuNC0zLjItNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDMuOSAyNDguM0wzOSAzMDguNWMtMTMuOSA0LjEtMTUuNiAyMy4yLTIuNiAyOS43bDU3LjMgMjguN2MxLjMgLjcgMi42IDEuNSAzLjcgMi41bC04OCA4OGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGw4OC04OGMxIDEuMSAxLjkgMi4zIDIuNSAzLjdsMjguNyA1Ny4zYzYuNSAxMyAyNS42IDExLjMgMjkuNy0yLjZsNjAuMi0yMDQuOGMzLjYtMTIuMS03LjctMjMuNC0xOS45LTE5Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
const GlobePointer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-22.1 2.8-43.5 8.1-64l123.1 0c-1.9 18.4-2.9 37.4-3.1 57L20.4 280.6c-7.1 2.1-13.1 5.5-18.1 9.9C.8 279.2 0 267.7 0 256zm18.6-96C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160L18.6 160zm141.6 79.5c.4-16.3 1.5-32.2 3.1-47.5l185.3 0c2.2 20.4 3.3 41.8 3.3 64s-1.2 43.6-3.3 64l-66.8 0 12.6-42.8c10.7-36.4-23.1-70.3-59.6-59.6l-74.6 21.9zm7.5-79.5c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7l-176.6 0zm61 338.6c1-2.2 1.9-4.6 2.7-7.1L272.4 352l71.9 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512c-7.2 0-16.3-3.1-27.3-13.4zM321.4 8.4c78.3 20.7 142 77.5 171.9 151.6l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6zm0 495.1c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0c-30 74.1-93.6 130.9-171.9 151.6zM380.8 192l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64z" />
            <path d="M243.9 248.3L39 308.5c-13.9 4.1-15.6 23.2-2.6 29.7l57.3 28.7c1.3 .7 2.6 1.5 3.7 2.5l-88 88c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l88-88c1 1.1 1.9 2.3 2.5 3.7l28.7 57.3c6.5 13 25.6 11.3 29.7-2.6l60.2-204.8c3.6-12.1-7.7-23.4-19.9-19.9z" />
    </Icon>
);

export default GlobePointer;