
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `robot` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=thin robot}
 * @preview ![robot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjA4QzE5Ny41MzMgMjA4IDE3NiAyMjkuNTMzIDE3NiAyNTZTMTk3LjUzMyAzMDQgMjI0IDMwNFMyNzIgMjgyLjQ2NyAyNzIgMjU2UzI1MC40NjcgMjA4IDIyNCAyMDhaTTIyNCAyODhDMjA2LjMyOCAyODggMTkyIDI3My42NzQgMTkyIDI1NlMyMDYuMzI4IDIyNCAyMjQgMjI0QzI0MS42NzQgMjI0IDI1NiAyMzguMzI2IDI1NiAyNTZTMjQxLjY3NCAyODggMjI0IDI4OFpNNDAgMjA4SDY0QzY4LjQwNiAyMDggNzIgMjA0LjQwNiA3MiAyMDBTNjguNDA2IDE5MiA2NCAxOTJINDBDMTcuOTM4IDE5MiAwIDIwOS45MzggMCAyMzJWMzc2QzAgMzk4LjA2MiAxNy45MzggNDE2IDQwIDQxNkg2NEM2OC40MDYgNDE2IDcyIDQxMi40MDYgNzIgNDA4UzY4LjQwNiA0MDAgNjQgNDAwSDQwQzI2Ljc4MSA0MDAgMTYgMzg5LjIxOSAxNiAzNzZWMjMyQzE2IDIxOC43ODEgMjYuNzgxIDIwOCA0MCAyMDhaTTQxNiAyMDhDMzg5LjUzMyAyMDggMzY4IDIyOS41MzMgMzY4IDI1NlMzODkuNTMzIDMwNCA0MTYgMzA0UzQ2NCAyODIuNDY3IDQ2NCAyNTZTNDQyLjQ2NyAyMDggNDE2IDIwOFpNNDE2IDI4OEMzOTguMzI4IDI4OCAzODQgMjczLjY3NCAzODQgMjU2UzM5OC4zMjggMjI0IDQxNiAyMjRDNDMzLjY3NCAyMjQgNDQ4IDIzOC4zMjYgNDQ4IDI1NlM0MzMuNjc0IDI4OCA0MTYgMjg4Wk00NDggOTZIMzI4VjhDMzI4IDMuNTk0IDMyNC40MDYgMCAzMjAgMFMzMTIgMy41OTQgMzEyIDhWOTZIMTkyQzEzOC45OCA5NiA5NiAxMzguOTggOTYgMTkyVjQxNkM5NiA0NjkuMDIgMTM4Ljk4IDUxMiAxOTIgNTEySDQ0OEM1MDEuMDIgNTEyIDU0NCA0NjkuMDIgNTQ0IDQxNlYxOTJDNTQ0IDEzOC45OCA1MDEuMDIgOTYgNDQ4IDk2Wk01MjggNDAwSDQ4OEM0ODMuNTk0IDQwMCA0ODAgNDAzLjU5NCA0ODAgNDA4UzQ4My41OTQgNDE2IDQ4OCA0MTZINTI4QzUyOCA0NjAuMTExIDQ5Mi4xMTEgNDk2IDQ0OCA0OTZIMTkyQzE0Ny44ODkgNDk2IDExMiA0NjAuMTExIDExMiA0MTZIMTUyQzE1Ni40MDYgNDE2IDE2MCA0MTIuNDA2IDE2MCA0MDhTMTU2LjQwNiA0MDAgMTUyIDQwMEgxMTJWMTkyQzExMiAxNDcuODg5IDE0Ny44ODkgMTEyIDE5MiAxMTJINDQ4QzQ5Mi4xMTEgMTEyIDUyOCAxNDcuODg5IDUyOCAxOTJWNDAwWk02MDAgMTkySDU3NkM1NzEuNTk0IDE5MiA1NjggMTk1LjU5NCA1NjggMjAwUzU3MS41OTQgMjA4IDU3NiAyMDhINjAwQzYxMy4yMTkgMjA4IDYyNCAyMTguNzgxIDYyNCAyMzJWMzc2QzYyNCAzODkuMjE5IDYxMy4yMTkgNDAwIDYwMCA0MDBINTc2QzU3MS41OTQgNDAwIDU2OCA0MDMuNTk0IDU2OCA0MDhTNTcxLjU5NCA0MTYgNTc2IDQxNkg2MDBDNjIyLjA2MiA0MTYgNjQwIDM5OC4wNjIgNjQwIDM3NlYyMzJDNjQwIDIwOS45MzggNjIyLjA2MiAxOTIgNjAwIDE5MlpNMjQ4IDQwMEgyMDBDMTk1LjU5NCA0MDAgMTkyIDQwMy41OTQgMTkyIDQwOFMxOTUuNTk0IDQxNiAyMDAgNDE2SDI0OEMyNTIuNDA2IDQxNiAyNTYgNDEyLjQwNiAyNTYgNDA4UzI1Mi40MDYgNDAwIDI0OCA0MDBaTTM0NCA0MDBIMjk2QzI5MS41OTQgNDAwIDI4OCA0MDMuNTk0IDI4OCA0MDhTMjkxLjU5NCA0MTYgMjk2IDQxNkgzNDRDMzQ4LjQwNiA0MTYgMzUyIDQxMi40MDYgMzUyIDQwOFMzNDguNDA2IDQwMCAzNDQgNDAwWk00NDAgNDAwSDM5MkMzODcuNTk0IDQwMCAzODQgNDAzLjU5NCAzODQgNDA4UzM4Ny41OTQgNDE2IDM5MiA0MTZINDQwQzQ0NC40MDYgNDE2IDQ0OCA0MTIuNDA2IDQ0OCA0MDhTNDQ0LjQwNiA0MDAgNDQwIDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Robot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 208C197.533 208 176 229.533 176 256S197.533 304 224 304S272 282.467 272 256S250.467 208 224 208ZM224 288C206.328 288 192 273.674 192 256S206.328 224 224 224C241.674 224 256 238.326 256 256S241.674 288 224 288ZM40 208H64C68.406 208 72 204.406 72 200S68.406 192 64 192H40C17.938 192 0 209.938 0 232V376C0 398.062 17.938 416 40 416H64C68.406 416 72 412.406 72 408S68.406 400 64 400H40C26.781 400 16 389.219 16 376V232C16 218.781 26.781 208 40 208ZM416 208C389.533 208 368 229.533 368 256S389.533 304 416 304S464 282.467 464 256S442.467 208 416 208ZM416 288C398.328 288 384 273.674 384 256S398.328 224 416 224C433.674 224 448 238.326 448 256S433.674 288 416 288ZM448 96H328V8C328 3.594 324.406 0 320 0S312 3.594 312 8V96H192C138.98 96 96 138.98 96 192V416C96 469.02 138.98 512 192 512H448C501.02 512 544 469.02 544 416V192C544 138.98 501.02 96 448 96ZM528 400H488C483.594 400 480 403.594 480 408S483.594 416 488 416H528C528 460.111 492.111 496 448 496H192C147.889 496 112 460.111 112 416H152C156.406 416 160 412.406 160 408S156.406 400 152 400H112V192C112 147.889 147.889 112 192 112H448C492.111 112 528 147.889 528 192V400ZM600 192H576C571.594 192 568 195.594 568 200S571.594 208 576 208H600C613.219 208 624 218.781 624 232V376C624 389.219 613.219 400 600 400H576C571.594 400 568 403.594 568 408S571.594 416 576 416H600C622.062 416 640 398.062 640 376V232C640 209.938 622.062 192 600 192ZM248 400H200C195.594 400 192 403.594 192 408S195.594 416 200 416H248C252.406 416 256 412.406 256 408S252.406 400 248 400ZM344 400H296C291.594 400 288 403.594 288 408S291.594 416 296 416H344C348.406 416 352 412.406 352 408S348.406 400 344 400ZM440 400H392C387.594 400 384 403.594 384 408S387.594 416 392 416H440C444.406 416 448 412.406 448 408S444.406 400 440 400Z" />
        </Icon>
    </>
}