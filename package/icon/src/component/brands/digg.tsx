
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `digg` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/digg?s=brands digg}
 * @preview ![digg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MS43IDE3Mi4zSDB2MTc0LjRoMTMyLjdWOTZoLTUxdjc2LjN6bTAgMTMzLjRINTAuOXYtOTIuM2gzMC44djkyLjN6bTI5Ny4yLTEzMy40djE3NC40aDgxLjh2MjguNWgtODEuOFY0MTZINTEyVjE3Mi4zSDM3OC45em04MS44IDEzMy40aC0zMC44di05Mi4zaDMwLjh2OTIuM3ptLTIzNS42IDQxaDgyLjF2MjguNWgtODIuMVY0MTZoMTMzLjNWMTcyLjNIMjI1LjF2MTc0LjR6bTUxLjItMTMzLjNoMzAuOHY5Mi4zaC0zMC44di05Mi4zek0xNTMuMyA5Nmg1MS4zdjUxaC01MS4zVjk2em0wIDc2LjNoNTEuM3YxNzQuNGgtNTEuM1YxNzIuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Digg(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M81.7 172.3H0v174.4h132.7V96h-51v76.3zm0 133.4H50.9v-92.3h30.8v92.3zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3H378.9zm81.8 133.4h-30.8v-92.3h30.8v92.3zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1v174.4zm51.2-133.3h30.8v92.3h-30.8v-92.3zM153.3 96h51.3v51h-51.3V96zm0 76.3h51.3v174.4h-51.3V172.3z" />
        </Icon>
    </>
}