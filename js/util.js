import {createRandomIdFromRangeGenerator, COUNT_OBJECTS, COUNT_COMMENTS} from "./js/data.js"

const createComments = () => {
    const comment = [];

    for (let i=0; i <= COUNT_COMMENTS; i++) {

    comment.push({
        id: createRandomIdFromRangeGenerator(10, 500)(),
        avatar: `img/avatar-${createRandomIdFromRangeGenerator(1, 6)()}.svg`,
        message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
        name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    });
    };

    return comment;
};

const similarComments = createComments();

const createPhoto = () => {
    const photos = [];

    for (let i=0; i <= COUNT_OBJECTS; i++) {

    photos.push({
        id: i,
        url: `photos/${createRandomIdFromRangeGenerator(1, COUNT_OBJECTS)()}.jpg`,
        description: 'Лучшая картинка',
        likes: createRandomIdFromRangeGenerator(15, 200)(),
        comments: similarComments,
    });
    };

    return photos;
};

const exportPhoto = createPhoto();
export {exportPhoto};