import fastifyMulter from "npm:fastify-multer";
import path from "node:path";

const storageTypes: Record<
  string,
  ReturnType<typeof fastifyMulter.diskStorage>
> = {
  local: fastifyMulter.diskStorage({
    destination: (req, file, cb) => {
      let folder = "";
      if (req.url.includes("posts")) folder = "posts";
      cb(null, `public/images/${folder}`);
    },

    filename: (req, file, cb) => {
      cb(
        null,
        Date.now() +
          String(Math.floor(Math.random() * 1000)) +
          path.extname(file.originalname)
      );
    },
  }),
};

const imageUpload = fastifyMulter({
  storage: storageTypes["local"],
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg)$/i)) {
      return cb(new Error("Somente imagens JPG ou PNG!"));
    }
    cb(null, true);
  },
});

export { imageUpload };
