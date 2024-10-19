
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=thin starfighter}
 * @preview ![starfighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjggMzA0SDIwMEMyMDQuNDIyIDMwNCAyMDggMzAwLjQwNiAyMDggMjk2UzIwNC40MjIgMjg4IDIwMCAyODhIMTY4QzE0NS45MzggMjg4IDEyOCAzMDUuOTM4IDEyOCAzMjhWMzQ0SDQwVjE2MEg1NkM2MC40MjIgMTYwIDY0IDE1Ni40MDYgNjQgMTUyUzYwLjQyMiAxNDQgNTYgMTQ0SDQwVjEwNEM0MCA5OS41OTQgMzYuNDIyIDk2IDMyIDk2UzI0IDk5LjU5NCAyNCAxMDRWMTQ0SDhDMy41NzggMTQ0IDAgMTQ3LjU5NCAwIDE1MlMzLjU3OCAxNjAgOCAxNjBIMjRWNDQwQzI0IDQ0NC40MDYgMjcuNTc4IDQ0OCAzMiA0NDhTNDAgNDQ0LjQwNiA0MCA0NDBWNDI3LjY1MkwxMjkuMjA3IDQ2MS45NjNDMTMxLjkyIDQ3Mi4yMzQgMTQwLjg4MSA0ODAgMTUyIDQ4MEgxOTJWNTA0QzE5MiA1MDguNDA2IDE5NS41NzggNTEyIDIwMCA1MTJTMjA4IDUwOC40MDYgMjA4IDUwNFY0NzJDMjA4IDQ2Ny41OTQgMjA0LjQyMiA0NjQgMjAwIDQ2NEgxNTJDMTQ3LjU5NCA0NjQgMTQ0IDQ2MC40MDYgMTQ0IDQ1NlYzMjhDMTQ0IDMxNC43ODEgMTU0Ljc2NiAzMDQgMTY4IDMwNFpNMTI4IDQ0NC4zNDhMNDAgNDEwLjUwMlYzNjBIMTI4VjQ0NC4zNDhaTTYzMiAxNDRINjE2VjEwNEM2MTYgOTkuNTk0IDYxMi40MjIgOTYgNjA4IDk2UzYwMCA5OS41OTQgNjAwIDEwNFYxNDRINTg0QzU3OS41NzggMTQ0IDU3NiAxNDcuNTk0IDU3NiAxNTJTNTc5LjU3OCAxNjAgNTg0IDE2MEg2MDBWMzQ0SDUxMlYzMjhDNTEyIDMwNS45MzggNDk0LjA2MiAyODggNDcyIDI4OEg0NDBDNDM1LjU3OCAyODggNDMyIDI5MS41OTQgNDMyIDI5NlM0MzUuNTc4IDMwNCA0NDAgMzA0SDQ3MkM0ODUuMjM0IDMwNCA0OTYgMzE0Ljc4MSA0OTYgMzI4VjQ1NkM0OTYgNDYwLjQwNiA0OTIuNDA2IDQ2NCA0ODggNDY0SDQ0MEM0MzUuNTc4IDQ2NCA0MzIgNDY3LjU5NCA0MzIgNDcyVjUwNEM0MzIgNTA4LjQwNiA0MzUuNTc4IDUxMiA0NDAgNTEyUzQ0OCA1MDguNDA2IDQ0OCA1MDRWNDgwSDQ4OEM0OTkuMTE5IDQ4MCA1MDguMDggNDcyLjIzNCA1MTAuNzkzIDQ2MS45NjNMNjAwIDQyNy42NTJWNDQwQzYwMCA0NDQuNDA2IDYwMy41NzggNDQ4IDYwOCA0NDhTNjE2IDQ0NC40MDYgNjE2IDQ0MFYxNjBINjMyQzYzNi40MjIgMTYwIDY0MCAxNTYuNDA2IDY0MCAxNTJTNjM2LjQyMiAxNDQgNjMyIDE0NFpNNjAwIDQxMC41MDJMNTEyIDQ0NC4zNDhWMzYwSDYwMFY0MTAuNTAyWk0zMjAgMjE2QzI5Ny45MzggMjE2IDI4MCAyMzMuOTM4IDI4MCAyNTZWMzA0QzI4MCAzMTcuMjE5IDI5MC43NjYgMzI4IDMwNCAzMjhIMzM2QzM0OS4yMzQgMzI4IDM2MCAzMTcuMjE5IDM2MCAzMDRWMjU2QzM2MCAyMzMuOTM4IDM0Mi4wNjIgMjE2IDMyMCAyMTZaTTM0NCAzMDRDMzQ0IDMwOC41IDM0MC40ODQgMzEyIDMzNiAzMTJIMzA0QzI5OS41MTYgMzEyIDI5NiAzMDguNSAyOTYgMzA0VjI1NkMyOTYgMjQyLjc4MSAzMDYuNzY2IDIzMiAzMjAgMjMyUzM0NCAyNDIuNzgxIDM0NCAyNTZWMzA0Wk0zNjkuNjI3IDI4LjAxNkMzNjcuNjMxIDEyLjA0NSAzNTMuOTggMCAzMzcuODc1IDBIMzAyLjEyNUMyODYuMDIxIDAgMjcyLjM3MSAxMi4wNDUgMjcwLjM3MyAyOC4wMTZMMjQwLjEyMyAyNzAuMDE2TDI0MCAyNzEuMDA0VjQ0OEMyNDAgNDY1LjY0NSAyNTQuMzU1IDQ4MCAyNzIgNDgwSDM2OEMzODUuNjQ1IDQ4MCA0MDAgNDY1LjY0NSA0MDAgNDQ4VjI3MS4wMDRMMzk5Ljg3NyAyNzAuMDE2TDM2OS42MjcgMjguMDE2Wk0zODQgNDQ4QzM4NCA0NTYuODc1IDM3Ni44NzUgNDY0IDM2OCA0NjRIMjcyQzI2My4xMjUgNDY0IDI1NiA0NTYuODc1IDI1NiA0NDhWMjcyTDI4Ni4yNSAzMEMyODcuMjUgMjIgMjk0IDE2IDMwMi4xMjUgMTZIMzM3Ljg3NUMzNDYgMTYgMzUyLjc1IDIyIDM1My43NSAzMEwzODQgMjcyVjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Starfighter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M168 304H200C204.422 304 208 300.406 208 296S204.422 288 200 288H168C145.938 288 128 305.938 128 328V344H40V160H56C60.422 160 64 156.406 64 152S60.422 144 56 144H40V104C40 99.594 36.422 96 32 96S24 99.594 24 104V144H8C3.578 144 0 147.594 0 152S3.578 160 8 160H24V440C24 444.406 27.578 448 32 448S40 444.406 40 440V427.652L129.207 461.963C131.92 472.234 140.881 480 152 480H192V504C192 508.406 195.578 512 200 512S208 508.406 208 504V472C208 467.594 204.422 464 200 464H152C147.594 464 144 460.406 144 456V328C144 314.781 154.766 304 168 304ZM128 444.348L40 410.502V360H128V444.348ZM632 144H616V104C616 99.594 612.422 96 608 96S600 99.594 600 104V144H584C579.578 144 576 147.594 576 152S579.578 160 584 160H600V344H512V328C512 305.938 494.062 288 472 288H440C435.578 288 432 291.594 432 296S435.578 304 440 304H472C485.234 304 496 314.781 496 328V456C496 460.406 492.406 464 488 464H440C435.578 464 432 467.594 432 472V504C432 508.406 435.578 512 440 512S448 508.406 448 504V480H488C499.119 480 508.08 472.234 510.793 461.963L600 427.652V440C600 444.406 603.578 448 608 448S616 444.406 616 440V160H632C636.422 160 640 156.406 640 152S636.422 144 632 144ZM600 410.502L512 444.348V360H600V410.502ZM320 216C297.938 216 280 233.938 280 256V304C280 317.219 290.766 328 304 328H336C349.234 328 360 317.219 360 304V256C360 233.938 342.062 216 320 216ZM344 304C344 308.5 340.484 312 336 312H304C299.516 312 296 308.5 296 304V256C296 242.781 306.766 232 320 232S344 242.781 344 256V304ZM369.627 28.016C367.631 12.045 353.98 0 337.875 0H302.125C286.021 0 272.371 12.045 270.373 28.016L240.123 270.016L240 271.004V448C240 465.645 254.355 480 272 480H368C385.645 480 400 465.645 400 448V271.004L399.877 270.016L369.627 28.016ZM384 448C384 456.875 376.875 464 368 464H272C263.125 464 256 456.875 256 448V272L286.25 30C287.25 22 294 16 302.125 16H337.875C346 16 352.75 22 353.75 30L384 272V448Z" />
        </Icon>
    </>
}