export async function busyLoader(method: () => any, loading: (loadingValue: boolean) => void, error?: (e: Error) => void ) {
    try {
        loading(true);
        await method();
    } catch (e) {
        if (error) {
            error(e);
        } else {
            throw new Error(e);
        }
    } finally {
        loading(false);
    }
}