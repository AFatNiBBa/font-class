
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloudversify` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloudversify?s=brands cloudversify}
 * @preview ![cloudversify](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDguNiAzMDRjOC4yIDY4LjUgNjcuNCAxMTUuNSAxNDYgMTExLjMgNTEuMiA0My4zIDEzNi44IDQ1LjggMTg2LjQtNS42IDY5LjIgMS4xIDExOC41LTQ0LjYgMTMxLjUtOTkuNSAxNC44LTYyLjUtMTguMi0xMzIuNS05Mi4xLTE1NS4xLTMzLTg4LjEtMTMxLjQtMTAxLjUtMTg2LjUtODUtNTcuMyAxNy4zLTg0LjMgNTMuMi05OS4zIDEwOS43LTcuOCAyLjctMjYuNSA4LjktNDUgMjQuMSAxMS43IDAgMTUuMiA4LjkgMTUuMiAxOS41djIwLjRjMCAxMC43LTguNyAxOS41LTE5LjUgMTkuNWgtMjAuMmMtMTAuNyAwLTE5LjUtNi0xOS41LTE2LjdWMjQwSDk4LjhDOTUgMjQwIDg4IDI0NC4zIDg4IDI1MS45djQwLjRjMCA2LjQgNS4zIDExLjggMTEuNyAxMS44aDQ4Ljl6bTIyNy40IDhjLTEwLjcgNDYuMyAyMS43IDcyLjQgNTUuMyA4Ni44QzMyNC4xIDQzMi42IDI1OS43IDM0OCAyOTYgMjg4Yy0zMy4yIDIxLjYtMzMuNyA3MS4yLTI5LjIgOTIuOS0xNy45LTEyLjQtNTMuOC0zMi40LTU3LjQtNzkuOC0zLTM5LjkgMjEuNS03NS43IDU3LTkzLjlDMjk3IDE5MS40IDM2OS45IDE5OC43IDQwMCAyNDhjLTE0LjEtNDgtNTMuOC03MC4xLTEwMS44LTc0LjggMzAuOS0zMC43IDY0LjQtNTAuMyAxMTQuMi00My43IDY5LjggOS4zIDEzMy4yIDgyLjggNjcuNyAxNTAuNSAzNS0xNi4zIDQ4LjctNTQuNCA0Ny41LTc2LjlsMTAuNSAxOS42YzExLjggMjIgMTUuMiA0Ny42IDkuNCA3Mi05LjIgMzktNDAuNiA2OC44LTc5LjcgNzYuNS0zMi4xIDYuMy04My4xLTUuMS05MS44LTU5LjJ6TTEyOCAyMDhIODguMmMtOC45IDAtMTYuMi03LjMtMTYuMi0xNi4ydi0zOS42YzAtOC45IDcuMy0xNi4yIDE2LjItMTYuMkgxMjhjOC45IDAgMTYuMiA3LjMgMTYuMiAxNi4ydjM5LjZjMCA4LjktNy4zIDE2LjItMTYuMiAxNi4yek0xMC4xIDE2OEM0LjUgMTY4IDAgMTYzLjUgMCAxNTcuOXYtMjcuOGMwLTUuNiA0LjUtMTAuMSAxMC4xLTEwLjFoMjcuN2M1LjUgMCAxMC4xIDQuNSAxMC4xIDEwLjF2MjcuOGMwIDUuNi00LjUgMTAuMS0xMC4xIDEwLjFIMTAuMXpNMTY4IDE0Mi43di0yMS40YzAtNS4xIDQuMi05LjMgOS4zLTkuM2gyMS40YzUuMSAwIDkuMyA0LjIgOS4zIDkuM3YyMS40YzAgNS4xLTQuMiA5LjMtOS4zIDkuM2gtMjEuNGMtNS4xIDAtOS4zLTQuMi05LjMtOS4zek01NiAyMzUuNXYyNWMwIDYuMy01LjEgMTEuNS0xMS40IDExLjVIMTkuNEMxMy4xIDI3MiA4IDI2Ni44IDggMjYwLjV2LTI1YzAtNi4zIDUuMS0xMS41IDExLjQtMTEuNWgyNS4xYzYuNCAwIDExLjUgNS4yIDExLjUgMTEuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cloudversify(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 616 512" {...props}>
            <path d="M148.6 304c8.2 68.5 67.4 115.5 146 111.3 51.2 43.3 136.8 45.8 186.4-5.6 69.2 1.1 118.5-44.6 131.5-99.5 14.8-62.5-18.2-132.5-92.1-155.1-33-88.1-131.4-101.5-186.5-85-57.3 17.3-84.3 53.2-99.3 109.7-7.8 2.7-26.5 8.9-45 24.1 11.7 0 15.2 8.9 15.2 19.5v20.4c0 10.7-8.7 19.5-19.5 19.5h-20.2c-10.7 0-19.5-6-19.5-16.7V240H98.8C95 240 88 244.3 88 251.9v40.4c0 6.4 5.3 11.8 11.7 11.8h48.9zm227.4 8c-10.7 46.3 21.7 72.4 55.3 86.8C324.1 432.6 259.7 348 296 288c-33.2 21.6-33.7 71.2-29.2 92.9-17.9-12.4-53.8-32.4-57.4-79.8-3-39.9 21.5-75.7 57-93.9C297 191.4 369.9 198.7 400 248c-14.1-48-53.8-70.1-101.8-74.8 30.9-30.7 64.4-50.3 114.2-43.7 69.8 9.3 133.2 82.8 67.7 150.5 35-16.3 48.7-54.4 47.5-76.9l10.5 19.6c11.8 22 15.2 47.6 9.4 72-9.2 39-40.6 68.8-79.7 76.5-32.1 6.3-83.1-5.1-91.8-59.2zM128 208H88.2c-8.9 0-16.2-7.3-16.2-16.2v-39.6c0-8.9 7.3-16.2 16.2-16.2H128c8.9 0 16.2 7.3 16.2 16.2v39.6c0 8.9-7.3 16.2-16.2 16.2zM10.1 168C4.5 168 0 163.5 0 157.9v-27.8c0-5.6 4.5-10.1 10.1-10.1h27.7c5.5 0 10.1 4.5 10.1 10.1v27.8c0 5.6-4.5 10.1-10.1 10.1H10.1zM168 142.7v-21.4c0-5.1 4.2-9.3 9.3-9.3h21.4c5.1 0 9.3 4.2 9.3 9.3v21.4c0 5.1-4.2 9.3-9.3 9.3h-21.4c-5.1 0-9.3-4.2-9.3-9.3zM56 235.5v25c0 6.3-5.1 11.5-11.4 11.5H19.4C13.1 272 8 266.8 8 260.5v-25c0-6.3 5.1-11.5 11.4-11.5h25.1c6.4 0 11.5 5.2 11.5 11.5z" />
        </Icon>
    </>
}