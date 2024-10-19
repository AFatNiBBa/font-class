
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=thin sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgODhIMTA0VjhDMTA0IDMuNTk0IDEwMC40MDYgMCA5NiAwUzg4IDMuNTk0IDg4IDhWODhIOEMzLjU5NCA4OCAwIDkxLjU5NCAwIDk2UzMuNTk0IDEwNCA4IDEwNEg4OFY1MDRDODggNTA4LjQwNiA5MS41OTQgNTEyIDk2IDUxMlMxMDQgNTA4LjQwNiAxMDQgNTA0VjEwNEg1MDRDNTA4LjQwNiAxMDQgNTEyIDEwMC40MDYgNTEyIDk2UzUwOC40MDYgODggNTA0IDg4Wk00NzIgMTM2QzQ2Ny41OTQgMTM2IDQ2NCAxMzkuNTk0IDQ2NCAxNDRWMzY4SDE3NlYxNDRDMTc2IDEzOS41OTQgMTcyLjQwNiAxMzYgMTY4IDEzNlMxNjAgMTM5LjU5NCAxNjAgMTQ0VjM3NkMxNjAgMzgwLjQwNiAxNjMuNTk0IDM4NCAxNjggMzg0SDQ3MkM0NzYuNDA2IDM4NCA0ODAgMzgwLjQwNiA0ODAgMzc2VjE0NEM0ODAgMTM5LjU5NCA0NzYuNDA2IDEzNiA0NzIgMTM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignHanging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 88H104V8C104 3.594 100.406 0 96 0S88 3.594 88 8V88H8C3.594 88 0 91.594 0 96S3.594 104 8 104H88V504C88 508.406 91.594 512 96 512S104 508.406 104 504V104H504C508.406 104 512 100.406 512 96S508.406 88 504 88ZM472 136C467.594 136 464 139.594 464 144V368H176V144C176 139.594 172.406 136 168 136S160 139.594 160 144V376C160 380.406 163.594 384 168 384H472C476.406 384 480 380.406 480 376V144C480 139.594 476.406 136 472 136Z" />
        </Icon>
    </>
}