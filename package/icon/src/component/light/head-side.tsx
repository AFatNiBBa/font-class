
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `head-side` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=light head-side}
 * @preview ![head-side](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuMjIzIDI3NUM0ODguMjIzIDIyNy44NzUgNDYwLjcyNyAxMjMuMjUgNDM2LjEwNCA4OC4yNUMzOTcuNjA2IDMzLjYyNSAzMzQuNDg3IDAgMjY2LjExNyAwSDE5OS45OThDOTUuNTA2IDAgNC4xMzkgODAuMTI1IDAuMTM5IDE4NC41Qy0yLjExMSAyNDQuMzc1IDIzLjEzNyAyOTguMTI1IDY0LjAwOCAzMzQuODc1TDYzLjk5OCA0OTZDNjMuOTk4IDUwNC44NDQgNzEuMTU1IDUxMiA3OS45OTggNTEyQzg4Ljg0IDUxMiA5NS45OTYgNTA0Ljg0NCA5NS45OTYgNDk2Qzk1Ljk5NiA0NzIuMjM0IDk2LjA0MyAzNDUuNjcgOTYuMDA2IDMyMC41TDg1LjM4MSAzMTFDNDkuNzYgMjc5IDMwLjI2MiAyMzMuMzc1IDMyLjEzNyAxODUuNzVDMzUuMzg3IDEwMSAxMTAuNjI5IDMyIDE5OS45OTggMzJIMjY2LjExN0MzMjMuMjM3IDMyIDM3Ni45ODMgNTkuODc1IDQwOS45ODEgMTA2LjYyNUM0MjIuNDc5IDEyNC41IDQzOC45NzkgMTczLjM3NSA0NTIuMzUyIDIxMi43NUM0NjIuMTAyIDI0MS41IDQ3MS4zNSAyNjguNSA0NzkuOTc1IDI4OEg0MzEuOTc5QzQyMy4xNDIgMjg4IDQxNS45NzkgMjk1LjE2MyA0MTUuOTc5IDMwNFYzODRDNDE1Ljk3OSA0MDEuNiA0MDEuNTc5IDQxNiAzODMuOTc5IDQxNkgzMDMuOTg4QzI5NS4xNTIgNDE2IDI4Ny45ODkgNDIzLjExOSAyODcuOTg4IDQzMS45NTRDMjg3Ljk4NSA0NTEuNzg4IDI4Ny45ODEgNDg0LjQzNyAyODcuOTgxIDQ5NkMyODcuOTgxIDUwNC44NDQgMjk1LjEzNyA1MTIgMzAzLjk3OSA1MTJDMzEyLjgyMiA1MTIgMzE5Ljk3OSA1MDQuODQ0IDMxOS45NzkgNDk2QzMxOS45NzkgNDgzLjgxOCAzMTkuOTg5IDQ2MC4wODQgMzE5Ljk4OSA0NDhIMzgzLjk4M0M0MTkuMzI2IDQ0OCA0NDcuOTc3IDQxOS4zNDkgNDQ3Ljk3NyAzODQuMDA2VjMyMEg0NzkuOTc1QzUwMy4wOTggMzIwIDUxOC41OTYgMjk2LjEyNSA1MDkuMjIzIDI3NVpNMzQ0LjAwMiAyMjRDMzU3LjI1NCAyMjQgMzY4IDIxMy4yNTQgMzY4IDIwMEMzNjggMTg2Ljc0NCAzNTcuMjU0IDE3NiAzNDQuMDAyIDE3NkMzMzAuNzQ4IDE3NiAzMjAuMDA0IDE4Ni43NDQgMzIwLjAwNCAyMDBDMzIwLjAwNCAyMTMuMjU0IDMzMC43NDggMjI0IDM0NC4wMDIgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HeadSide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M509.223 275C488.223 227.875 460.727 123.25 436.104 88.25C397.606 33.625 334.487 0 266.117 0H199.998C95.506 0 4.139 80.125 0.139 184.5C-2.111 244.375 23.137 298.125 64.008 334.875L63.998 496C63.998 504.844 71.155 512 79.998 512C88.84 512 95.996 504.844 95.996 496C95.996 472.234 96.043 345.67 96.006 320.5L85.381 311C49.76 279 30.262 233.375 32.137 185.75C35.387 101 110.629 32 199.998 32H266.117C323.237 32 376.983 59.875 409.981 106.625C422.479 124.5 438.979 173.375 452.352 212.75C462.102 241.5 471.35 268.5 479.975 288H431.979C423.142 288 415.979 295.163 415.979 304V384C415.979 401.6 401.579 416 383.979 416H303.988C295.152 416 287.989 423.119 287.988 431.954C287.985 451.788 287.981 484.437 287.981 496C287.981 504.844 295.137 512 303.979 512C312.822 512 319.979 504.844 319.979 496C319.979 483.818 319.989 460.084 319.989 448H383.983C419.326 448 447.977 419.349 447.977 384.006V320H479.975C503.098 320 518.596 296.125 509.223 275ZM344.002 224C357.254 224 368 213.254 368 200C368 186.744 357.254 176 344.002 176C330.748 176 320.004 186.744 320.004 200C320.004 213.254 330.748 224 344.002 224Z" />
        </Icon>
    </>
}