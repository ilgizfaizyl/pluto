import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./${app.path.rootFoider}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "ZIP",
                    message: "Error: <%= eror.message %>"
                })
            )  
        )
        .pipe(zipPlugin(`${app.path.rootFoider}.zip`))
        .pipe(app.gulp.dest('./'));
}