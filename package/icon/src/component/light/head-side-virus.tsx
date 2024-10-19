
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `head-side-virus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-virus?s=light head-side-virus}
 * @preview ![head-side-virus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTkxLjk5OEMyMTUuMTY0IDE5MS45OTggMjA4IDE5OS4xNiAyMDggMjA3Ljk5OEMyMDggMjE2LjgzNCAyMTUuMTY0IDIyMy45OTggMjI0IDIyMy45OThTMjQwIDIxNi44MzQgMjQwIDIwNy45OThDMjQwIDE5OS4xNiAyMzIuODM2IDE5MS45OTggMjI0IDE5MS45OThaTTI1NiAyMjRDMjQ3LjE2NCAyMjQgMjQwIDIzMS4xNjIgMjQwIDI0MEMyNDAgMjQ4LjgzNiAyNDcuMTY0IDI1NiAyNTYgMjU2UzI3MiAyNDguODM2IDI3MiAyNDBDMjcyIDIzMS4xNjIgMjY0LjgzNiAyMjQgMjU2IDIyNFpNMzEwLjYyNyAzMTcuMjUyTDMxOS4yMDMgMzI1LjgyOEMzMjIuMzI4IDMyOC45NTMgMzI2LjQyMiAzMzAuNTE2IDMzMC41MTYgMzMwLjUxNlMzMzguNzAzIDMyOC45NTMgMzQxLjgyOCAzMjUuODI4QzM0OC4wNzggMzE5LjU3OCAzNDguMDc4IDMwOS40NTMgMzQxLjgyOCAzMDMuMjAzTDMzMy4yNTIgMjk0LjYyN0MzMTMuMDk0IDI3NC40NjkgMzI3LjM3MSAyNDAgMzU1Ljg3OSAyNDBIMzY4QzM3Ni44NDQgMjQwIDM4NCAyMzIuODQ0IDM4NCAyMjRTMzc2Ljg0NCAyMDggMzY4IDIwOEgzNTUuODc5QzMyNy4zNzEgMjA4IDMxMy4wOTQgMTczLjUzMSAzMzMuMjUyIDE1My4zNzNMMzQxLjgyOCAxNDQuNzk3QzM0OC4wNzggMTM4LjU0NyAzNDguMDc4IDEyOC40MjIgMzQxLjgyOCAxMjIuMTcyQzMzOC43MDMgMTE5LjA0NyAzMzQuNjEgMTE3LjQ4NCAzMzAuNTE2IDExNy40ODRTMzIyLjMyOCAxMTkuMDQ3IDMxOS4yMDMgMTIyLjE3MkwzMTAuNjI3IDEzMC43NDhDMzA0LjEwOCAxMzcuMjY4IDI5Ni4wOTYgMTQwLjE4NCAyODguMjMzIDE0MC4xODRDMjcxLjc4MyAxNDAuMTg0IDI1NiAxMjcuNDA4IDI1NiAxMDguMTE5Vjk2QzI1NiA4Ny4xNTYgMjQ4Ljg0NCA4MCAyNDAgODBTMjI0IDg3LjE1NiAyMjQgOTZWMTA4LjExOUMyMjQgMTI3LjQxIDIwOC4yMTkgMTQwLjE4NCAxOTEuNzcgMTQwLjE4NEMxODMuOTA2IDE0MC4xODQgMTc1Ljg5MyAxMzcuMjY2IDE2OS4zNzMgMTMwLjc0OEwxNjAuNzk3IDEyMi4xNzJDMTU3LjY3MiAxMTkuMDQ3IDE1My41NzggMTE3LjQ4NCAxNDkuNDg1IDExNy40ODRTMTQxLjI5NyAxMTkuMDQ3IDEzOC4xNzIgMTIyLjE3MkMxMzEuOTIyIDEyOC40MjIgMTMxLjkyMiAxMzguNTQ3IDEzOC4xNzIgMTQ0Ljc5N0wxNDYuNzQ4IDE1My4zNzNDMTY2LjkwNiAxNzMuNTMxIDE1Mi42MjkgMjA4IDEyNC4xMjEgMjA4SDExMkMxMDMuMTU2IDIwOCA5NiAyMTUuMTU2IDk2IDIyNFMxMDMuMTU2IDI0MCAxMTIgMjQwSDEyNC4xMjFDMTUyLjYyOSAyNDAgMTY2LjkwNiAyNzQuNDY5IDE0Ni43NDggMjk0LjYyN0wxMzguMTcyIDMwMy4yMDNDMTMxLjkyMiAzMDkuNDUzIDEzMS45MjIgMzE5LjU3OCAxMzguMTcyIDMyNS44MjhDMTQxLjI5NyAzMjguOTUzIDE0NS4zOTEgMzMwLjUxNiAxNDkuNDg1IDMzMC41MTZTMTU3LjY3MiAzMjguOTUzIDE2MC43OTcgMzI1LjgyOEwxNjkuMzczIDMxNy4yNTJDMTc1Ljg5MyAzMTAuNzMyIDE4My45MDYgMzA3LjgxNCAxOTEuNzcgMzA3LjgxNkMyMDguMjE5IDMwNy44MTggMjI0IDMyMC41OTIgMjI0IDMzOS44NzlWMzUyQzIyNCAzNjAuODQ0IDIzMS4xNTYgMzY4IDI0MCAzNjhTMjU2IDM2MC44NDQgMjU2IDM1MlYzMzkuODc5QzI1NiAzMjAuNTkgMjcxLjc4MSAzMDcuODE0IDI4OC4yMzMgMzA3LjgxNkMyOTYuMDk0IDMwNy44MTYgMzA0LjExIDMxMC43MzQgMzEwLjYyNyAzMTcuMjUyWk0yNDQuMTA2IDI5My4yMjdDMjQyLjYzMyAyOTQuNjAyIDI0MS4yMzcgMjk2LjAzNSAyMzkuOTE2IDI5Ny41MkMyMjguMTM5IDI4NC4yMjEgMjEwLjkyIDI3NS44MTggMTkxLjc3NCAyNzUuODE2QzE5MC41MjIgMjc1LjgxNiAxODkuMjc2IDI3NS44NTIgMTg4LjAzNSAyNzUuOTI2QzE4OC42MTIgMjY2LjQyMiAxODcuMDYzIDI1Ni43MTcgMTgzLjI0OCAyNDcuNTA4QzE3OS40MjggMjM4LjI4NSAxNzMuNjQ5IDIzMC4zMTYgMTY2LjUwNiAyMjRDMTczLjY0OSAyMTcuNjg0IDE3OS40MjggMjA5LjcxNSAxODMuMjQ4IDIwMC40OTJDMTg3LjA2MyAxOTEuMjgzIDE4OC42MTIgMTgxLjU3OCAxODguMDM1IDE3Mi4wNzZDMTg5LjI3NCAxNzIuMTQ4IDE5MC41MiAxNzIuMTg0IDE5MS43NyAxNzIuMTg0QzIxMC45NjUgMTcyLjE4NCAyMjguMjIxIDE2My43NDIgMjQwIDE1MC4zODVDMjUxLjc4MSAxNjMuNzQyIDI2OS4wMzUgMTcyLjE4NCAyODguMjMzIDE3Mi4xODRDMjg5LjQ4MSAxNzIuMTg0IDI5MC43MjcgMTcyLjE0OCAyOTEuOTY1IDE3Mi4wNzZDMjkxLjM4OSAxODEuNTc4IDI5Mi45MzggMTkxLjI4MyAyOTYuNzUyIDIwMC40OTJDMzAwLjU3MiAyMDkuNzE1IDMwNi4zNTIgMjE3LjY4NCAzMTMuNDk0IDIyNEMzMDYuMzUyIDIzMC4zMTYgMzAwLjU3MiAyMzguMjg1IDI5Ni43NTIgMjQ3LjUwOEMyOTIuOTM4IDI1Ni43MTcgMjkxLjM4OSAyNjYuNDIyIDI5MS45NjUgMjc1LjkyNEMyOTAuNzI3IDI3NS44NTIgMjg5LjQ4MyAyNzUuODE2IDI4OC4yMzMgMjc1LjgxNkMyNzEuNzk5IDI3NS44MTQgMjU2LjEyOSAyODEuOTk4IDI0NC4xMDYgMjkzLjIyN1pNNTA5LjIyMyAyNzVDNDg4LjIyMyAyMjcuODc1IDQ2MC43MjcgMTIzLjI1IDQzNi4xMDQgODguMjVDMzk3LjYwNiAzMy42MjUgMzM0LjQ4NyAwIDI2Ni4xMTcgMEgxOTkuOTk4Qzk1LjUwNiAwIDQuMTM5IDgwLjEyNSAwLjEzOSAxODQuNUMtMi4xMTEgMjQ0LjM3NSAyMy4xMzcgMjk4LjEyNSA2NC4wMDggMzM0Ljg3NUw2My45OTggNDk2QzYzLjk5OCA1MDQuODQ0IDcxLjE1NSA1MTIgNzkuOTk4IDUxMkM4OC44NCA1MTIgOTUuOTk2IDUwNC44NDQgOTUuOTk2IDQ5NkM5NS45OTYgNDcyLjIzNCA5Ni4wNDMgMzQ1LjY3IDk2LjAwNiAzMjAuNUw4NS4zODEgMzExQzQ5Ljc2IDI3OSAzMC4yNjIgMjMzLjM3NSAzMi4xMzcgMTg1Ljc1QzM1LjM4NyAxMDEgMTEwLjYyOSAzMiAxOTkuOTk4IDMySDI2Ni4xMTdDMzIzLjIzNyAzMiAzNzYuOTgzIDU5Ljg3NSA0MDkuOTgxIDEwNi42MjVDNDIyLjQ3OSAxMjQuNSA0MzguOTc5IDE3My4zNzUgNDUyLjM1MiAyMTIuNzVDNDYyLjEwMiAyNDEuNSA0NzEuMzUgMjY4LjUgNDc5Ljk3NSAyODhINDMxLjk3OUM0MjMuMTQyIDI4OCA0MTUuOTc5IDI5NS4xNjMgNDE1Ljk3OSAzMDRWMzg0QzQxNS45NzkgNDAxLjYgNDAxLjU3OSA0MTYgMzgzLjk3OSA0MTZIMzAzLjk4OEMyOTUuMTUyIDQxNiAyODcuOTg5IDQyMy4xMTkgMjg3Ljk4OCA0MzEuOTU0QzI4Ny45ODUgNDUxLjc4OCAyODcuOTgxIDQ4NC40MzcgMjg3Ljk4MSA0OTZDMjg3Ljk4MSA1MDQuODQ0IDI5NS4xMzcgNTEyIDMwMy45NzkgNTEyQzMxMi44MjIgNTEyIDMxOS45NzkgNTA0Ljg0NCAzMTkuOTc5IDQ5NkMzMTkuOTc5IDQ4My44MTggMzE5Ljk4OSA0NjAuMDg0IDMxOS45ODkgNDQ4SDM4My45ODNDNDE5LjMyNiA0NDggNDQ3Ljk3NyA0MTkuMzQ5IDQ0Ny45NzcgMzg0LjAwNlYzMjBINDc5Ljk3NUM1MDMuMDk4IDMyMCA1MTguNTk2IDI5Ni4xMjUgNTA5LjIyMyAyNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HeadSideVirus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M224 191.998C215.164 191.998 208 199.16 208 207.998C208 216.834 215.164 223.998 224 223.998S240 216.834 240 207.998C240 199.16 232.836 191.998 224 191.998ZM256 224C247.164 224 240 231.162 240 240C240 248.836 247.164 256 256 256S272 248.836 272 240C272 231.162 264.836 224 256 224ZM310.627 317.252L319.203 325.828C322.328 328.953 326.422 330.516 330.516 330.516S338.703 328.953 341.828 325.828C348.078 319.578 348.078 309.453 341.828 303.203L333.252 294.627C313.094 274.469 327.371 240 355.879 240H368C376.844 240 384 232.844 384 224S376.844 208 368 208H355.879C327.371 208 313.094 173.531 333.252 153.373L341.828 144.797C348.078 138.547 348.078 128.422 341.828 122.172C338.703 119.047 334.61 117.484 330.516 117.484S322.328 119.047 319.203 122.172L310.627 130.748C304.108 137.268 296.096 140.184 288.233 140.184C271.783 140.184 256 127.408 256 108.119V96C256 87.156 248.844 80 240 80S224 87.156 224 96V108.119C224 127.41 208.219 140.184 191.77 140.184C183.906 140.184 175.893 137.266 169.373 130.748L160.797 122.172C157.672 119.047 153.578 117.484 149.485 117.484S141.297 119.047 138.172 122.172C131.922 128.422 131.922 138.547 138.172 144.797L146.748 153.373C166.906 173.531 152.629 208 124.121 208H112C103.156 208 96 215.156 96 224S103.156 240 112 240H124.121C152.629 240 166.906 274.469 146.748 294.627L138.172 303.203C131.922 309.453 131.922 319.578 138.172 325.828C141.297 328.953 145.391 330.516 149.485 330.516S157.672 328.953 160.797 325.828L169.373 317.252C175.893 310.732 183.906 307.814 191.77 307.816C208.219 307.818 224 320.592 224 339.879V352C224 360.844 231.156 368 240 368S256 360.844 256 352V339.879C256 320.59 271.781 307.814 288.233 307.816C296.094 307.816 304.11 310.734 310.627 317.252ZM244.106 293.227C242.633 294.602 241.237 296.035 239.916 297.52C228.139 284.221 210.92 275.818 191.774 275.816C190.522 275.816 189.276 275.852 188.035 275.926C188.612 266.422 187.063 256.717 183.248 247.508C179.428 238.285 173.649 230.316 166.506 224C173.649 217.684 179.428 209.715 183.248 200.492C187.063 191.283 188.612 181.578 188.035 172.076C189.274 172.148 190.52 172.184 191.77 172.184C210.965 172.184 228.221 163.742 240 150.385C251.781 163.742 269.035 172.184 288.233 172.184C289.481 172.184 290.727 172.148 291.965 172.076C291.389 181.578 292.938 191.283 296.752 200.492C300.572 209.715 306.352 217.684 313.494 224C306.352 230.316 300.572 238.285 296.752 247.508C292.938 256.717 291.389 266.422 291.965 275.924C290.727 275.852 289.483 275.816 288.233 275.816C271.799 275.814 256.129 281.998 244.106 293.227ZM509.223 275C488.223 227.875 460.727 123.25 436.104 88.25C397.606 33.625 334.487 0 266.117 0H199.998C95.506 0 4.139 80.125 0.139 184.5C-2.111 244.375 23.137 298.125 64.008 334.875L63.998 496C63.998 504.844 71.155 512 79.998 512C88.84 512 95.996 504.844 95.996 496C95.996 472.234 96.043 345.67 96.006 320.5L85.381 311C49.76 279 30.262 233.375 32.137 185.75C35.387 101 110.629 32 199.998 32H266.117C323.237 32 376.983 59.875 409.981 106.625C422.479 124.5 438.979 173.375 452.352 212.75C462.102 241.5 471.35 268.5 479.975 288H431.979C423.142 288 415.979 295.163 415.979 304V384C415.979 401.6 401.579 416 383.979 416H303.988C295.152 416 287.989 423.119 287.988 431.954C287.985 451.788 287.981 484.437 287.981 496C287.981 504.844 295.137 512 303.979 512C312.822 512 319.979 504.844 319.979 496C319.979 483.818 319.989 460.084 319.989 448H383.983C419.326 448 447.977 419.349 447.977 384.006V320H479.975C503.098 320 518.596 296.125 509.223 275Z" />
        </Icon>
    </>
}