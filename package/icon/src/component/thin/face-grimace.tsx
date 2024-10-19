
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-grimace` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=thin face-grimace}
 * @preview ![face-grimace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMjIyLjY0OEMxODQuODQ0IDIyMi42NDggMTkyIDIxNS41IDE5MiAyMDYuNjQ4UzE4NC44NDQgMTkwLjY0OCAxNzYgMTkwLjY0OFMxNjAgMTk3Ljc5NyAxNjAgMjA2LjY0OFMxNjcuMTU2IDIyMi42NDggMTc2IDIyMi42NDhaTTM1MiAzMDRIMTYwQzE0Mi4zMjYgMzA0IDEyOCAzMTguMzI4IDEyOCAzMzZWMzY4QzEyOCAzODUuNjcyIDE0Mi4zMjYgNDAwIDE2MCA0MDBIMzUyQzM2OS42NzQgNDAwIDM4NCAzODUuNjcyIDM4NCAzNjhWMzM2QzM4NCAzMTguMzI4IDM2OS42NzQgMzA0IDM1MiAzMDRaTTE4NCAzODRIMTYwQzE1MS4xNzggMzg0IDE0NCAzNzYuODI0IDE0NCAzNjhWMzM2QzE0NCAzMjcuMTc2IDE1MS4xNzggMzIwIDE2MCAzMjBIMTg0VjM4NFpNMjQ4IDM4NEgyMDBWMzIwSDI0OFYzODRaTTMxMiAzODRIMjY0VjMyMEgzMTJWMzg0Wk0zNjggMzY4QzM2OCAzNzYuODI0IDM2MC44MjIgMzg0IDM1MiAzODRIMzI4VjMyMEgzNTJDMzYwLjgyMiAzMjAgMzY4IDMyNy4xNzYgMzY4IDMzNlYzNjhaTTMzNiAyMjIuNjQ4QzM0NC44NDQgMjIyLjY0OCAzNTIgMjE1LjUgMzUyIDIwNi42NDhTMzQ0Ljg0NCAxOTAuNjQ4IDMzNiAxOTAuNjQ4UzMyMCAxOTcuNzk3IDMyMCAyMDYuNjQ4UzMyNy4xNTYgMjIyLjY0OCAzMzYgMjIyLjY0OFpNMjU2IDE2QzEyMy40NTMgMTYgMTYgMTIzLjQ1MyAxNiAyNTZTMTIzLjQ1MyA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDcgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODQgNDgwIDMyIDM3OS41MTYgMzIgMjU2UzEzMi40ODQgMzIgMjU2IDMyUzQ4MCAxMzIuNDg0IDQ4MCAyNTZTMzc5LjUxNiA0ODAgMjU2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceGrimace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176 222.648C184.844 222.648 192 215.5 192 206.648S184.844 190.648 176 190.648S160 197.797 160 206.648S167.156 222.648 176 222.648ZM352 304H160C142.326 304 128 318.328 128 336V368C128 385.672 142.326 400 160 400H352C369.674 400 384 385.672 384 368V336C384 318.328 369.674 304 352 304ZM184 384H160C151.178 384 144 376.824 144 368V336C144 327.176 151.178 320 160 320H184V384ZM248 384H200V320H248V384ZM312 384H264V320H312V384ZM368 368C368 376.824 360.822 384 352 384H328V320H352C360.822 320 368 327.176 368 336V368ZM336 222.648C344.844 222.648 352 215.5 352 206.648S344.844 190.648 336 190.648S320 197.797 320 206.648S327.156 222.648 336 222.648ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480Z" />
        </Icon>
    </>
}