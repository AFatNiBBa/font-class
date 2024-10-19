
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=thin tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWNDAwQzAgNDI2LjUgMjEuNSA0NDggNDggNDQ4SDU5MkM2MTguNSA0NDggNjQwIDQyNi41IDY0MCA0MDBWNDhDNjQwIDIxLjUgNjE4LjUgMCA1OTIgMFpNNjI0IDQwMEM2MjQgNDE3LjY0NSA2MDkuNjQ1IDQzMiA1OTIgNDMySDQ4QzMwLjM1NSA0MzIgMTYgNDE3LjY0NSAxNiA0MDBWNDhDMTYgMzAuMzU1IDMwLjM1NSAxNiA0OCAxNkg1OTJDNjA5LjY0NSAxNiA2MjQgMzAuMzU1IDYyNCA0OFY0MDBaTTY0IDM4NEg1NzZWNjRINjRWMzg0Wk04MCA4MEg1NjBWMzY4SDgwVjgwWk01MzYgNDk2SDEwNEM5OS41OTQgNDk2IDk2IDQ5OS41NzggOTYgNTA0Uzk5LjU5NCA1MTIgMTA0IDUxMkg1MzZDNTQwLjQwNiA1MTIgNTQ0IDUwOC40MjIgNTQ0IDUwNFM1NDAuNDA2IDQ5NiA1MzYgNDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 0H48C21.5 0 0 21.5 0 48V400C0 426.5 21.5 448 48 448H592C618.5 448 640 426.5 640 400V48C640 21.5 618.5 0 592 0ZM624 400C624 417.645 609.645 432 592 432H48C30.355 432 16 417.645 16 400V48C16 30.355 30.355 16 48 16H592C609.645 16 624 30.355 624 48V400ZM64 384H576V64H64V384ZM80 80H560V368H80V80ZM536 496H104C99.594 496 96 499.578 96 504S99.594 512 104 512H536C540.406 512 544 508.422 544 504S540.406 496 536 496Z" />
        </Icon>
    </>
}