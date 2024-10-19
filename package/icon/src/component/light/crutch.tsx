
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `crutch` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=light crutch}
 * @preview ![crutch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMzEyIDE5Ni42ODhMMzE1LjMxMiA0LjY4OEMzMDkuMDYyIC0xLjU2MiAyOTguOTM3IC0xLjU2MiAyOTIuNjg4IDQuNjg4UzI4Ni40MzggMjEuMDYzIDI5Mi42ODggMjcuMzEyTDQ4NC42ODggMjE5LjMxMkM0ODcuODEyIDIyMi40MzggNDkxLjkwNiAyMjQgNDk2IDIyNFM1MDQuMTg3IDIyMi40MzggNTA3LjMxMiAyMTkuMzEyQzUxMy41NjIgMjEzLjA2MiA1MTMuNTYyIDIwMi45MzggNTA3LjMxMiAxOTYuNjg4Wk00MDQuNjg4IDIxMi42ODhMMzM2IDI4MS4zNzVMMjMwLjYyNSAxNzZMMjk5LjMxMiAxMDcuMzEyQzMwNS41NjIgMTAxLjA2MiAzMDUuNTYyIDkwLjkzNyAyOTkuMzEyIDg0LjY4OFMyODIuOTM3IDc4LjQzOCAyNzYuNjg4IDg0LjY4OEwxNjIuMzc1IDE5OUMxNTEuMjE5IDIxMC4xNTYgMTQzLjY1NiAyMjQuMjgxIDE0MC41IDIzOS44NzVMMTEzLjI1IDM3Ni4xMjVMNC42ODggNDg0LjY4OEMtMS41NjMgNDkwLjkzOCAtMS41NjMgNTAxLjA2MyA0LjY4OCA1MDcuMzEyQzcuODEyIDUxMC40MzggMTEuOTA2IDUxMiAxNiA1MTJTMjQuMTg4IDUxMC40MzggMjcuMzEyIDUwNy4zMTJMMTM1Ljg3MyAzOTguNzUyTDI3Mi4xNTYgMzcxLjVDMjg3LjcxOSAzNjguMzQ0IDMwMS44NDQgMzYwLjc4MSAzMTMgMzQ5LjYyNUw0MjcuMzEyIDIzNS4zMTJDNDMzLjU2MiAyMjkuMDYyIDQzMy41NjIgMjE4LjkzNyA0MjcuMzEyIDIxMi42ODhTNDEwLjkzOCAyMDYuNDM4IDQwNC42ODggMjEyLjY4OFpNMjkwLjM3NSAzMjdDMjgzLjY4OCAzMzMuNjg4IDI3NS4xODggMzM4LjI1IDI2NS44NzUgMzQwLjEyNUwxNDguNDA2IDM2My41OTRMMTcxLjg3NSAyNDYuMTU2QzE3My43NSAyMzYuODEyIDE3OC4zMTIgMjI4LjMxMiAxODUgMjIxLjYyNUwyMDggMTk4LjYyNUwzMTMuMzc1IDMwNEwyOTAuMzc1IDMyN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Crutch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.312 196.688L315.312 4.688C309.062 -1.562 298.937 -1.562 292.688 4.688S286.438 21.063 292.688 27.312L484.688 219.312C487.812 222.438 491.906 224 496 224S504.187 222.438 507.312 219.312C513.562 213.062 513.562 202.938 507.312 196.688ZM404.688 212.688L336 281.375L230.625 176L299.312 107.312C305.562 101.062 305.562 90.937 299.312 84.688S282.937 78.438 276.688 84.688L162.375 199C151.219 210.156 143.656 224.281 140.5 239.875L113.25 376.125L4.688 484.688C-1.563 490.938 -1.563 501.063 4.688 507.312C7.812 510.438 11.906 512 16 512S24.188 510.438 27.312 507.312L135.873 398.752L272.156 371.5C287.719 368.344 301.844 360.781 313 349.625L427.312 235.312C433.562 229.062 433.562 218.937 427.312 212.688S410.938 206.438 404.688 212.688ZM290.375 327C283.688 333.688 275.188 338.25 265.875 340.125L148.406 363.594L171.875 246.156C173.75 236.812 178.312 228.312 185 221.625L208 198.625L313.375 304L290.375 327Z" />
        </Icon>
    </>
}