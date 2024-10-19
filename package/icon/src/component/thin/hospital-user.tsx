
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hospital-user` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-user?s=thin hospital-user}
 * @preview ![hospital-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzIwQzUzMy4wMiAzMjAgNTc2IDI3Ny4wMiA1NzYgMjI0UzUzMy4wMiAxMjggNDgwIDEyOFMzODQgMTcwLjk4IDM4NCAyMjRTNDI2Ljk4IDMyMCA0ODAgMzIwWk00ODAgMTQ0QzUyNC4xMTMgMTQ0IDU2MCAxNzkuODg3IDU2MCAyMjRTNTI0LjExMyAzMDQgNDgwIDMwNEM0MzUuODg5IDMwNCA0MDAgMjY4LjExMyA0MDAgMjI0UzQzNS44ODkgMTQ0IDQ4MCAxNDRaTTEzMiAzNTJIOTJDODAuOTY5IDM1MiA3MiAzNjAuOTY5IDcyIDM3MlY0MTJDNzIgNDIzLjAzMSA4MC45NjkgNDMyIDkyIDQzMkgxMzJDMTQzLjAzMSA0MzIgMTUyIDQyMy4wMzEgMTUyIDQxMlYzNzJDMTUyIDM2MC45NjkgMTQzLjAzMSAzNTIgMTMyIDM1MlpNMTM2IDQxMkMxMzYgNDE0LjIxOSAxMzQuMjE5IDQxNiAxMzIgNDE2SDkyQzg5Ljc4MSA0MTYgODggNDE0LjIxOSA4OCA0MTJWMzcyQzg4IDM2OS43ODEgODkuNzgxIDM2OCA5MiAzNjhIMTMyQzEzNC4yMTkgMzY4IDEzNiAzNjkuNzgxIDEzNiAzNzJWNDEyWk0xMzIgMjQwSDkyQzgwLjk2OSAyNDAgNzIgMjQ4Ljk2OSA3MiAyNjBWMzAwQzcyIDMxMS4wMzEgODAuOTY5IDMyMCA5MiAzMjBIMTMyQzE0My4wMzEgMzIwIDE1MiAzMTEuMDMxIDE1MiAzMDBWMjYwQzE1MiAyNDguOTY5IDE0My4wMzEgMjQwIDEzMiAyNDBaTTEzNiAzMDBDMTM2IDMwMi4yMTkgMTM0LjIxOSAzMDQgMTMyIDMwNEg5MkM4OS43ODEgMzA0IDg4IDMwMi4yMTkgODggMzAwVjI2MEM4OCAyNTcuNzgxIDg5Ljc4MSAyNTYgOTIgMjU2SDEzMkMxMzQuMjE5IDI1NiAxMzYgMjU3Ljc4MSAxMzYgMjYwVjMwMFpNMzM2IDQwVjM0NEMzMzYgMzQ4LjQwNiAzMzkuNTk0IDM1MiAzNDQgMzUyUzM1MiAzNDguNDA2IDM1MiAzNDRWNDBDMzUyIDE3LjkzOCAzMzQuMDYyIDAgMzEyIDBINDBDMTcuOTM4IDAgMCAxNy45MzggMCA0MFY1MDRDMCA1MDguNDA2IDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDA2IDE2IDUwNFY0MEMxNiAyNi43ODEgMjYuNzgxIDE2IDQwIDE2SDMxMkMzMjUuMjE5IDE2IDMzNiAyNi43ODEgMzM2IDQwWk01MTIgMzUySDQ0OEMzNzcuMzA3IDM1MiAzMjAgNDA5LjMwNSAzMjAgNDgwQzMyMCA0OTcuNjcyIDMzNC4zMjYgNTEyIDM1MiA1MTJINjA4QzYyNS42NzQgNTEyIDY0MCA0OTcuNjcyIDY0MCA0ODBDNjQwIDQwOS4zMDUgNTgyLjY5MyAzNTIgNTEyIDM1MlpNNjA4IDQ5NkgzNTJDMzQzLjE3OCA0OTYgMzM2IDQ4OC44MjQgMzM2IDQ4MEMzMzYgNDE4LjI0MiAzODYuMjQ0IDM2OCA0NDggMzY4SDUxMkM1NzMuNzU4IDM2OCA2MjQgNDE4LjI0MiA2MjQgNDgwQzYyNCA0ODguODI0IDYxNi44MjIgNDk2IDYwOCA0OTZaTTI2MCAzNTJIMjIwQzIwOC45NjkgMzUyIDIwMCAzNjAuOTY5IDIwMCAzNzJWNDEyQzIwMCA0MjMuMDMxIDIwOC45NjkgNDMyIDIyMCA0MzJIMjYwQzI3MS4wMzEgNDMyIDI4MCA0MjMuMDMxIDI4MCA0MTJWMzcyQzI4MCAzNjAuOTY5IDI3MS4wMzEgMzUyIDI2MCAzNTJaTTI2NCA0MTJDMjY0IDQxNC4yMTkgMjYyLjIxOSA0MTYgMjYwIDQxNkgyMjBDMjE3Ljc4MSA0MTYgMjE2IDQxNC4yMTkgMjE2IDQxMlYzNzJDMjE2IDM2OS43ODEgMjE3Ljc4MSAzNjggMjIwIDM2OEgyNjBDMjYyLjIxOSAzNjggMjY0IDM2OS43ODEgMjY0IDM3MlY0MTJaTTI2MCAyNDBIMjIwQzIwOC45NjkgMjQwIDIwMCAyNDguOTY5IDIwMCAyNjBWMzAwQzIwMCAzMTEuMDMxIDIwOC45NjkgMzIwIDIyMCAzMjBIMjYwQzI3MS4wMzEgMzIwIDI4MCAzMTEuMDMxIDI4MCAzMDBWMjYwQzI4MCAyNDguOTY5IDI3MS4wMzEgMjQwIDI2MCAyNDBaTTI2NCAzMDBDMjY0IDMwMi4yMTkgMjYyLjIxOSAzMDQgMjYwIDMwNEgyMjBDMjE3Ljc4MSAzMDQgMjE2IDMwMi4yMTkgMjE2IDMwMFYyNjBDMjE2IDI1Ny43ODEgMjE3Ljc4MSAyNTYgMjIwIDI1NkgyNjBDMjYyLjIxOSAyNTYgMjY0IDI1Ny43ODEgMjY0IDI2MFYzMDBaTTIwOCAxODMuNjg4VjE2MC4yMTlMMjMxLjY4OCAxNjBDMjQwLjY4OCAxNjAgMjQ4IDE1Mi42ODggMjQ4IDE0My42ODhWMTEyLjMxMkMyNDggMTAzLjMxMiAyNDAuNjg4IDk2IDIzMS42ODggOTZIMjA4VjcyLjMxMkMyMDggNjMuMzEyIDIwMC42ODggNTYgMTkxLjY4OCA1NkgxNjAuMzEyQzE1MS4zMTIgNTYgMTQ0IDYzLjMxMiAxNDQgNzIuMzEyVjk2SDEyMC4zMTJDMTExLjMxMiA5NiAxMDQgMTAzLjMxMiAxMDQgMTEyLjMxMlYxNDMuNjg4QzEwNCAxNTIuNjg4IDExMS4zMTIgMTYwIDEyMC4zMTIgMTYwSDE0My43ODFMMTQ0IDE4My42ODhDMTQ0IDE5Mi42ODggMTUxLjMxMiAyMDAgMTYwLjMxMiAyMDBIMTkxLjY4OEMyMDAuNjg4IDIwMCAyMDggMTkyLjY4OCAyMDggMTgzLjY4OFpNMTkxLjY4OCAxODRMMTYwIDE4My41OTRMMTU5LjU5NCAxNDRMMTIwIDE0My42ODhMMTIwLjMxMiAxMTJIMTYwTDE2MC4zMTIgNzJMMTkyIDcyLjMxMlYxMTJMMjMyIDExMi4zMTJMMjMxLjU5NCAxNDRMMTkyIDE0NC40MDZMMTkxLjY4OCAxODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HospitalUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M480 320C533.02 320 576 277.02 576 224S533.02 128 480 128S384 170.98 384 224S426.98 320 480 320ZM480 144C524.113 144 560 179.887 560 224S524.113 304 480 304C435.889 304 400 268.113 400 224S435.889 144 480 144ZM132 352H92C80.969 352 72 360.969 72 372V412C72 423.031 80.969 432 92 432H132C143.031 432 152 423.031 152 412V372C152 360.969 143.031 352 132 352ZM136 412C136 414.219 134.219 416 132 416H92C89.781 416 88 414.219 88 412V372C88 369.781 89.781 368 92 368H132C134.219 368 136 369.781 136 372V412ZM132 240H92C80.969 240 72 248.969 72 260V300C72 311.031 80.969 320 92 320H132C143.031 320 152 311.031 152 300V260C152 248.969 143.031 240 132 240ZM136 300C136 302.219 134.219 304 132 304H92C89.781 304 88 302.219 88 300V260C88 257.781 89.781 256 92 256H132C134.219 256 136 257.781 136 260V300ZM336 40V344C336 348.406 339.594 352 344 352S352 348.406 352 344V40C352 17.938 334.062 0 312 0H40C17.938 0 0 17.938 0 40V504C0 508.406 3.594 512 8 512S16 508.406 16 504V40C16 26.781 26.781 16 40 16H312C325.219 16 336 26.781 336 40ZM512 352H448C377.307 352 320 409.305 320 480C320 497.672 334.326 512 352 512H608C625.674 512 640 497.672 640 480C640 409.305 582.693 352 512 352ZM608 496H352C343.178 496 336 488.824 336 480C336 418.242 386.244 368 448 368H512C573.758 368 624 418.242 624 480C624 488.824 616.822 496 608 496ZM260 352H220C208.969 352 200 360.969 200 372V412C200 423.031 208.969 432 220 432H260C271.031 432 280 423.031 280 412V372C280 360.969 271.031 352 260 352ZM264 412C264 414.219 262.219 416 260 416H220C217.781 416 216 414.219 216 412V372C216 369.781 217.781 368 220 368H260C262.219 368 264 369.781 264 372V412ZM260 240H220C208.969 240 200 248.969 200 260V300C200 311.031 208.969 320 220 320H260C271.031 320 280 311.031 280 300V260C280 248.969 271.031 240 260 240ZM264 300C264 302.219 262.219 304 260 304H220C217.781 304 216 302.219 216 300V260C216 257.781 217.781 256 220 256H260C262.219 256 264 257.781 264 260V300ZM208 183.688V160.219L231.688 160C240.688 160 248 152.688 248 143.688V112.312C248 103.312 240.688 96 231.688 96H208V72.312C208 63.312 200.688 56 191.688 56H160.312C151.312 56 144 63.312 144 72.312V96H120.312C111.312 96 104 103.312 104 112.312V143.688C104 152.688 111.312 160 120.312 160H143.781L144 183.688C144 192.688 151.312 200 160.312 200H191.688C200.688 200 208 192.688 208 183.688ZM191.688 184L160 183.594L159.594 144L120 143.688L120.312 112H160L160.312 72L192 72.312V112L232 112.312L231.594 144L192 144.406L191.688 184Z" />
        </Icon>
    </>
}