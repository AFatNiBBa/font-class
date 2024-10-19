
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=light hospitals}
 * @preview ![hospitals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTMuMzM0IDIwMi42NjZIMTgxLjMzNFYxNzAuNjY2QzE4MS4zMzQgMTY0Ljc3MyAxNzYuNTU3IDE2MCAxNzAuNjY2IDE2MEgxNDkuMzM0QzE0My40NDMgMTYwIDEzOC42NjYgMTY0Ljc3MyAxMzguNjY2IDE3MC42NjZWMjAyLjY2NkgxMDYuNjY2QzEwMC43NzUgMjAyLjY2NiA5NiAyMDcuNDQxIDk2IDIxMy4zMzJWMjM0LjY2NkM5NiAyNDAuNTU3IDEwMC43NzUgMjQ1LjMzMiAxMDYuNjY2IDI0NS4zMzJIMTM4LjY2NlYyNzcuMzMyQzEzOC42NjYgMjgzLjIyMyAxNDMuNDQzIDI4OCAxNDkuMzM0IDI4OEgxNzAuNjY2QzE3Ni41NTcgMjg4IDE4MS4zMzQgMjgzLjIyMyAxODEuMzM0IDI3Ny4zMzJWMjQ1LjMzMkgyMTMuMzM0QzIxOS4yMjUgMjQ1LjMzMiAyMjQgMjQwLjU1NyAyMjQgMjM0LjY2NlYyMTMuMzMyQzIyNCAyMDcuNDQxIDIxOS4yMjUgMjAyLjY2NiAyMTMuMzM0IDIwMi42NjZaTTI1NiA5Nkg2NEMyOC42NTQgOTYgMCAxMjQuNjUyIDAgMTYwVjQ5NkMwIDUwNC44MzYgNy4xNjQgNTEyIDE2IDUxMlMzMiA1MDQuODM2IDMyIDQ5NlY0NDhIMjg4VjQ5NkMyODggNTA0LjgzNiAyOTUuMTY0IDUxMiAzMDQgNTEyUzMyMCA1MDQuODM2IDMyMCA0OTZWMTYwQzMyMCAxMjQuNjUyIDI5MS4zNDYgOTYgMjU2IDk2Wk0yODggNDE2SDMyVjM1MkgyODhWNDE2Wk0yODggMzIwSDMyVjE2MEMzMiAxNDIuMzI2IDQ2LjMyNiAxMjggNjQgMTI4SDI1NkMyNzMuNjc0IDEyOCAyODggMTQyLjMyNiAyODggMTYwVjMyMFpNNTExLjU4MiAwSDMxNy45MTRDMjg5LjQzNiAwIDI2NS4yNzMgMTguMzU3IDI1Ni43NjYgNDMuODEyQzI1My40MzYgNTMuNzczIDI2MS40MjggNjQgMjcxLjk5MiA2NEgyNzQuMzU0QzI4MC41MTIgNjQgMjg1LjQwMiA1OS42ODkgMjg3LjM0NiA1My44ODVDMjkxLjYwNyA0MS4xNjggMzAzLjY4MiAzMiAzMTcuOTE0IDMySDUxMS41ODJDNTI5LjM3MSAzMiA1NDMuNzkxIDQ2LjMyNiA1NDMuNzkxIDY0VjIyNEgzNjhDMzU5LjE2NCAyMjQgMzUyIDIzMS4xNjIgMzUyIDI0MEMzNTIgMjQ4LjgzNiAzNTkuMTY0IDI1NiAzNjggMjU2SDU0My43OTFWMzIwSDM2OEMzNTkuMTY0IDMyMCAzNTIgMzI3LjE2MiAzNTIgMzM2QzM1MiAzNDQuODM2IDM1OS4xNjQgMzUyIDM2OCAzNTJINTQzLjc5MVY0MTZIMzY4QzM1OS4xNjQgNDE2IDM1MiA0MjMuMTYyIDM1MiA0MzJDMzUyIDQ0MC44MzYgMzU5LjE2NCA0NDggMzY4IDQ0OEg1NDMuNzkxVjQ5NkM1NDMuNzkxIDUwNC44MzYgNTUxLjAwMiA1MTIgNTU5Ljg5NiA1MTJDNTY4Ljc4OSA1MTIgNTc2IDUwNC44MzYgNTc2IDQ5NlY2NEM1NzYgMjguNjUyIDU0Ny4xNiAwIDUxMS41ODIgMFpNNDI2LjY2NiA2NEg0MDUuMzM0QzM5OS40NDMgNjQgMzk0LjY2NiA2OC43NzMgMzk0LjY2NiA3NC42NjZWMTA2LjY2NkgzNjIuNjY2QzM1Ni43NzUgMTA2LjY2NiAzNTIgMTExLjQ0MSAzNTIgMTE3LjMzMlYxMzguNjY2QzM1MiAxNDQuNTU3IDM1Ni43NzUgMTQ5LjMzMiAzNjIuNjY2IDE0OS4zMzJIMzk0LjY2NlYxODEuMzMyQzM5NC42NjYgMTg3LjIyMyAzOTkuNDQzIDE5MiA0MDUuMzM0IDE5Mkg0MjYuNjY2QzQzMi41NTcgMTkyIDQzNy4zMzQgMTg3LjIyMyA0MzcuMzM0IDE4MS4zMzJWMTQ5LjMzMkg0NjkuMzM0QzQ3NS4yMjUgMTQ5LjMzMiA0ODAgMTQ0LjU1NyA0ODAgMTM4LjY2NlYxMTcuMzMyQzQ4MCAxMTEuNDQxIDQ3NS4yMjUgMTA2LjY2NiA0NjkuMzM0IDEwNi42NjZINDM3LjMzNFY3NC42NjZDNDM3LjMzNCA2OC43NzMgNDMyLjU1NyA2NCA0MjYuNjY2IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hospitals(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M213.334 202.666H181.334V170.666C181.334 164.773 176.557 160 170.666 160H149.334C143.443 160 138.666 164.773 138.666 170.666V202.666H106.666C100.775 202.666 96 207.441 96 213.332V234.666C96 240.557 100.775 245.332 106.666 245.332H138.666V277.332C138.666 283.223 143.443 288 149.334 288H170.666C176.557 288 181.334 283.223 181.334 277.332V245.332H213.334C219.225 245.332 224 240.557 224 234.666V213.332C224 207.441 219.225 202.666 213.334 202.666ZM256 96H64C28.654 96 0 124.652 0 160V496C0 504.836 7.164 512 16 512S32 504.836 32 496V448H288V496C288 504.836 295.164 512 304 512S320 504.836 320 496V160C320 124.652 291.346 96 256 96ZM288 416H32V352H288V416ZM288 320H32V160C32 142.326 46.326 128 64 128H256C273.674 128 288 142.326 288 160V320ZM511.582 0H317.914C289.436 0 265.273 18.357 256.766 43.812C253.436 53.773 261.428 64 271.992 64H274.354C280.512 64 285.402 59.689 287.346 53.885C291.607 41.168 303.682 32 317.914 32H511.582C529.371 32 543.791 46.326 543.791 64V224H368C359.164 224 352 231.162 352 240C352 248.836 359.164 256 368 256H543.791V320H368C359.164 320 352 327.162 352 336C352 344.836 359.164 352 368 352H543.791V416H368C359.164 416 352 423.162 352 432C352 440.836 359.164 448 368 448H543.791V496C543.791 504.836 551.002 512 559.896 512C568.789 512 576 504.836 576 496V64C576 28.652 547.16 0 511.582 0ZM426.666 64H405.334C399.443 64 394.666 68.773 394.666 74.666V106.666H362.666C356.775 106.666 352 111.441 352 117.332V138.666C352 144.557 356.775 149.332 362.666 149.332H394.666V181.332C394.666 187.223 399.443 192 405.334 192H426.666C432.557 192 437.334 187.223 437.334 181.332V149.332H469.334C475.225 149.332 480 144.557 480 138.666V117.332C480 111.441 475.225 106.666 469.334 106.666H437.334V74.666C437.334 68.773 432.557 64 426.666 64Z" />
        </Icon>
    </>
}