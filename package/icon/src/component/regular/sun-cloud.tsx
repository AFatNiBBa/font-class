
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun-cloud` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun-cloud?s=regular sun-cloud}
 * @preview ![sun-cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTMuMzE0IDM3OC40OEwzMzkuMTY4IDQ1Ni43NzlMMjU2IDM5OS4wNjFMMTcyLjgzMiA0NTYuNzc5TDE1NC44MzIgMzU3LjE1Mkw1NS4yMjYgMzM5LjE1MkwxMTIuOTQzIDI1NS45OTZMNTUuMjI2IDE3Mi44MzhMMTU0LjgzMiAxNTQuODM4TDE3Mi44MzIgNTUuMjExTDI1NiAxMTIuOTNMMzM5LjE1MiA1NS4xOEwzNTcuMTY4IDE1NC44MzhMMzg1Ljk4NCAxNjAuMDQ1QzQwMi42NSAxNDMuNzk5IDQyNC4yNzMgMTMxLjUxMiA0NDggMTI4TDM5OC40NzggMTEzLjUyM0wzODMuNTg3IDMxLjExN0MzODEuMzA2IDE4LjM5OCAzNzIuODI0IDcuODY3IDM2MC45MDIgMi44OTZDMzQ4LjkzMyAtMi4wMzkgMzM1LjQ4IC0wLjYwMiAzMjQuNzc5IDYuNzRMMjU2IDU0LjQ5MkwxODcuMTczIDYuNzA5QzE3Ni41MzUgLTAuNjAyIDE2My4wNjYgLTIuMDM5IDE1MS4xMTMgMi44OTZDMTM5LjE5MSA3Ljg2NyAxMzAuNzA5IDE4LjM5OCAxMjguNDEyIDMxLjA4NkwxMTMuNTIxIDExMy41MjNMMzEuMTUgMTI4LjRDMTguNDE2IDEzMC42ODIgNy44NTMgMTM5LjE4MiAyLjkgMTUxLjE1Qy0yLjA1MSAxNjMuMDg4IC0wLjYgMTc2LjU4OCA2Ljc3NSAxODcuMjEzTDU0LjUwNyAyNTUuOTk2TDYuNzU5IDMyNC44MDlDLTAuNiAzMzUuNDM0IC0yLjAzNiAzNDguOTM0IDIuOTE2IDM2MC44NzFDNy44ODQgMzcyLjgxMSAxOC40MzEgMzgxLjMxMSAzMS4xMzQgMzgzLjU5MkwxMTMuNTIxIDM5OC40NjdMMTI4LjQxMiA0ODAuODczQzEzMC43MDkgNDkzLjU5NCAxMzkuMTkxIDUwNC4xMjUgMTUxLjExMyA1MDkuMDk0QzE2My4wNjYgNTE0IDE3Ni41NSA1MTIuNjI1IDE4Ny4yMDUgNTA1LjI1TDI1NiA0NTcuNDk4TDMyNC44MjYgNTA1LjI4MUMzMzEuMjc3IDUwOS43MTkgMzM4Ljc2MSA1MTIgMzQ2LjMyNCA1MTJDMzUxLjIzIDUxMiAzNTYuMTgzIDUxMS4wMzEgMzYwLjg4NiA1MDkuMDk0QzM3Mi44MDggNTA0LjEyNSAzODEuMjkxIDQ5My41OTQgMzgzLjU4NyA0ODAuOTA0TDQwMS4zNDcgMzgzLjk2OUgzODRDMzczLjIwNyAzODMuOTY5IDM2My4wMDMgMzgxLjc3OSAzNTMuMzE0IDM3OC40OFpNMjU2IDE5MkMyODAuMDY0IDE5MiAzMDAuODE4IDIwNS41MTIgMzExLjc0MiAyMjUuMTk5QzMyMi4zNDMgMjEzLjAxNiAzMzUuOTEyIDIwMy42MjcgMzUxLjM2OSAxOTcuOTk0QzMzMS43MTEgMTY1Ljc0MiAyOTYuNTMxIDE0NCAyNTYgMTQ0QzE5NC4xNSAxNDQgMTQ0LjAwOSAxOTQuMTQxIDE0NC4wMDkgMjU1Ljk5NkMxNDQuMDA5IDMxNy44NSAxOTQuMTUgMzY3Ljk5IDI1NiAzNjcuOTlDMjc2Ljg4OCAzNjcuOTkgMjk2LjIwNyAzNjEuOSAzMTIuOTQ1IDM1MS45NDFDMzAyLjI1NyAzNDAuMDggMjk0LjQxNCAzMjUuNjk1IDI5MC42NzkgMzA5LjYyOUMyODAuNjcgMzE2LjEyNSAyNjguNzk2IDMxOS45OSAyNTYgMzE5Ljk5QzIyMC43MTYgMzE5Ljk5IDE5Mi4wMDkgMjkxLjI4MyAxOTIuMDA5IDI1NS45OTZTMjIwLjcxNiAxOTIgMjU2IDE5MlpNNTc2IDIyMy45NjlDNTY0IDIyMy45NjkgNTUyLjg3NSAyMjcuNDY5IDU0My4yNSAyMzMuMjE5QzUzOS43NSAxOTIuMjE5IDUwNS44NzUgMTU5Ljk2OSA0NjQgMTU5Ljk2OUM0MjUuMjUgMTU5Ljk2OSAzOTIuODc1IDE4Ny41OTQgMzg1LjYyNSAyMjQuMjE5QzM4NS4xMjUgMjI0LjIxOSAzODQuNjI1IDIyMy45NjkgMzg0IDIyMy45NjlDMzQ4Ljc1IDIyMy45NjkgMzIwIDI1Mi43MTkgMzIwIDI4Ny45NjlTMzQ4Ljc1IDM1MS45NjkgMzg0IDM1MS45NjlINTc2QzYxMS4yNSAzNTEuOTY5IDY0MCAzMjMuMjE5IDY0MCAyODcuOTY5UzYxMS4yNSAyMjMuOTY5IDU3NiAyMjMuOTY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SunCloud(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M353.314 378.48L339.168 456.779L256 399.061L172.832 456.779L154.832 357.152L55.226 339.152L112.943 255.996L55.226 172.838L154.832 154.838L172.832 55.211L256 112.93L339.152 55.18L357.168 154.838L385.984 160.045C402.65 143.799 424.273 131.512 448 128L398.478 113.523L383.587 31.117C381.306 18.398 372.824 7.867 360.902 2.896C348.933 -2.039 335.48 -0.602 324.779 6.74L256 54.492L187.173 6.709C176.535 -0.602 163.066 -2.039 151.113 2.896C139.191 7.867 130.709 18.398 128.412 31.086L113.521 113.523L31.15 128.4C18.416 130.682 7.853 139.182 2.9 151.15C-2.051 163.088 -0.6 176.588 6.775 187.213L54.507 255.996L6.759 324.809C-0.6 335.434 -2.036 348.934 2.916 360.871C7.884 372.811 18.431 381.311 31.134 383.592L113.521 398.467L128.412 480.873C130.709 493.594 139.191 504.125 151.113 509.094C163.066 514 176.55 512.625 187.205 505.25L256 457.498L324.826 505.281C331.277 509.719 338.761 512 346.324 512C351.23 512 356.183 511.031 360.886 509.094C372.808 504.125 381.291 493.594 383.587 480.904L401.347 383.969H384C373.207 383.969 363.003 381.779 353.314 378.48ZM256 192C280.064 192 300.818 205.512 311.742 225.199C322.343 213.016 335.912 203.627 351.369 197.994C331.711 165.742 296.531 144 256 144C194.15 144 144.009 194.141 144.009 255.996C144.009 317.85 194.15 367.99 256 367.99C276.888 367.99 296.207 361.9 312.945 351.941C302.257 340.08 294.414 325.695 290.679 309.629C280.67 316.125 268.796 319.99 256 319.99C220.716 319.99 192.009 291.283 192.009 255.996S220.716 192 256 192ZM576 223.969C564 223.969 552.875 227.469 543.25 233.219C539.75 192.219 505.875 159.969 464 159.969C425.25 159.969 392.875 187.594 385.625 224.219C385.125 224.219 384.625 223.969 384 223.969C348.75 223.969 320 252.719 320 287.969S348.75 351.969 384 351.969H576C611.25 351.969 640 323.219 640 287.969S611.25 223.969 576 223.969Z" />
        </Icon>
    </>
}