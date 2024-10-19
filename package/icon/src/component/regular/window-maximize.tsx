
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=regular window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDk2VjQxNkMwIDQ1MS4zNDggMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ4IDUxMiA0MTZWOTZDNTEyIDYwLjY1MiA0ODMuMzQ2IDMyIDQ0OCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlpNNDggMjI0SDQ2NFY0MTZDNDY0IDQyNC44MjQgNDU2LjgyMiA0MzIgNDQ4IDQzMkg2NEM1NS4xNzggNDMyIDQ4IDQyNC44MjQgNDggNDE2VjIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowMaximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32H64C28.654 32 0 60.652 0 96ZM48 224H464V416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V224Z" />
        </Icon>
    </>
}