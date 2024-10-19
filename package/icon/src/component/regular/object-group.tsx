
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `object-group` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=regular object-group}
 * @preview ![object-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTEyVjY0QzUxMiA0Ni4zMjYgNDk3LjY3NCAzMiA0ODAgMzJINDMyQzQxNC4zMjYgMzIgNDAwIDQ2LjMyNiA0MDAgNjRIMTEyQzExMiA0Ni4zMjYgOTcuNjc0IDMyIDgwIDMySDMyQzE0LjMyNiAzMiAwIDQ2LjMyNiAwIDY0VjExMkMwIDEyOS42NzIgMTQuMzI2IDE0NCAzMiAxNDRWMzY4QzE0LjMyNiAzNjggMCAzODIuMzI2IDAgNDAwVjQ0OEMwIDQ2NS42NzIgMTQuMzI2IDQ4MCAzMiA0ODBIODBDOTcuNjc0IDQ4MCAxMTIgNDY1LjY3MiAxMTIgNDQ4SDQwMEM0MDAgNDY1LjY3MiA0MTQuMzI2IDQ4MCA0MzIgNDgwSDQ4MEM0OTcuNjc0IDQ4MCA1MTIgNDY1LjY3MiA1MTIgNDQ4VjQwMEM1MTIgMzgyLjMyNiA0OTcuNjc0IDM2OCA0ODAgMzY4VjE0NEM0OTcuNjc0IDE0NCA1MTIgMTI5LjY3MiA1MTIgMTEyWk03MiA0NDBINDBWNDA4SDcyVjQ0MFpNNzIgMTA0SDQwVjcySDcyVjEwNFpNNDMyIDM2OEM0MTQuMzI2IDM2OCA0MDAgMzgyLjMyNiA0MDAgNDAwSDExMkMxMTIgMzgyLjMyNiA5Ny42NzQgMzY4IDgwIDM2OFYxNDRDOTcuNjc0IDE0NCAxMTIgMTI5LjY3MiAxMTIgMTEySDQwMEM0MDAgMTI5LjY3MiA0MTQuMzI2IDE0NCA0MzIgMTQ0VjM2OFpNNDcyIDQ0MEg0NDBWNDA4SDQ3MlY0NDBaTTQ3MiAxMDRINDQwVjcySDQ3MlYxMDRaTTI4OCAyNTZWMTc2QzI4OCAxNTguMzI2IDI3My42NzQgMTQ0IDI1NiAxNDRIMTQ0QzEyNi4zMjYgMTQ0IDExMiAxNTguMzI2IDExMiAxNzZWMjU2QzExMiAyNzMuNjcyIDEyNi4zMjYgMjg4IDE0NCAyODhIMjU2QzI3My42NzQgMjg4IDI4OCAyNzMuNjcyIDI4OCAyNTZaTTI0OCAyNDhIMTUyVjE4NEgyNDhWMjQ4Wk0zNjggMjI0SDMyMFYyNjRIMzYwVjMyOEgyNjRWMzIwSDIyNFYzMzZDMjI0IDM1My42NzIgMjM4LjMyNiAzNjggMjU2IDM2OEgzNjhDMzg1LjY3NCAzNjggNDAwIDM1My42NzIgNDAwIDMzNlYyNTZDNDAwIDIzOC4zMjYgMzg1LjY3NCAyMjQgMzY4IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ObjectGroup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 112V64C512 46.326 497.674 32 480 32H432C414.326 32 400 46.326 400 64H112C112 46.326 97.674 32 80 32H32C14.326 32 0 46.326 0 64V112C0 129.672 14.326 144 32 144V368C14.326 368 0 382.326 0 400V448C0 465.672 14.326 480 32 480H80C97.674 480 112 465.672 112 448H400C400 465.672 414.326 480 432 480H480C497.674 480 512 465.672 512 448V400C512 382.326 497.674 368 480 368V144C497.674 144 512 129.672 512 112ZM72 440H40V408H72V440ZM72 104H40V72H72V104ZM432 368C414.326 368 400 382.326 400 400H112C112 382.326 97.674 368 80 368V144C97.674 144 112 129.672 112 112H400C400 129.672 414.326 144 432 144V368ZM472 440H440V408H472V440ZM472 104H440V72H472V104ZM288 256V176C288 158.326 273.674 144 256 144H144C126.326 144 112 158.326 112 176V256C112 273.672 126.326 288 144 288H256C273.674 288 288 273.672 288 256ZM248 248H152V184H248V248ZM368 224H320V264H360V328H264V320H224V336C224 353.672 238.326 368 256 368H368C385.674 368 400 353.672 400 336V256C400 238.326 385.674 224 368 224Z" />
        </Icon>
    </>
}