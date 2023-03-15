import {useEffect, useRef} from 'react';

/**
 * A custom hook for creating and managing a container element.
 * @param root - The parent element to which the container will be appended.
 * @param type - The type of element to create as the container. Defaults to 'div'.
 * @param className - The className to give the container element. Defaults to 'itwc'.
 */
export function useContainer(root: HTMLElement, type = 'div', className = 'itwc') {
    const container = useRef<HTMLElement | null>(null);
    if (!container.current) {
        container.current = document.createElement(type);
        container.current['className'] = className;
    }
    if(container.current?.parentNode !== root) {
        root.appendChild(container.current);
    }

    useEffect(() => {
        // cleanup
        return () => {
            const orphan = container.current;
            if(orphan) {
                orphan.parentNode?.removeChild(orphan);
                container.current = null;
            }
        };
    }, []);

    return container.current;
}

export default useContainer;
