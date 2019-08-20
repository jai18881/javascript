/**
 * get a page of data from server, page size is fixed and always = 25
 * @param {number} pageIndex
 * @return Promise, resolved with page data when the data arrive from server
 *   e.g. when called with pageIndex=0 will return records with indexes [0, 1, 2, ... 24] - 1st page of data set
 *        when called with pageIndex=1 will return records with indexes [25, 26, 7, ... 49] - 2nd page of data set
 * consider this function implemented and working!
 */

function getPageFromServer(pageIndex){
    console.log('getPageFromServer called for page index: ', pageIndex);
    return new Promise(function(resolve){
        //...
        const pageData = [];
        const pageSize = 25;

        const minRecordNum = pageIndex * pageSize;
        const maxRecordNum = ((pageIndex + 1) * pageSize) - 1;

        for (let i = minRecordNum; i <= maxRecordNum; i++) {
            pageData.push(i);
        }
        resolve(pageData);
    });
}

// console.log(getPageFromServer(1));

/**
 * fetch any range of data from server using function getPageFromServer()
 * @param {number} startIndex of data
 * @param {number} endIndex of data
 * @returns Promise resolved when all data arrive from server
 */
async function getDataRangeFromServer(startIndex, endIndex){

    console.log('startIndex, endIndex : ', startIndex, endIndex);
    const pageSize = 25;
    const minPageIndex = Math.floor(startIndex / pageSize);
    const maxPageIndex = Math.floor(endIndex / pageSize);
    const promiseArr = [];

    for (let i = minPageIndex; i <= maxPageIndex; i++) {
        promiseArr.push(getPageFromServer(i));
    }

    return new Promise(function(resolve){
        //... write your code here!
        Promise.all(promiseArr).then((response) => {
            const finalArr = flatten(response).filter(item => item >= startIndex && item <= endIndex);
            console.log(finalArr.join(' '));
            resolve(finalArr);
        });
    });
}

function flatten(multiDimArr) {
    let flattenedArr = [];

    multiDimArr.forEach((arr) => {
        flattenedArr = flattenedArr.concat(arr);
    });
    return flattenedArr;
}

getDataRangeFromServer(0, 1); // -> returns records with indexes [0, 1], calls getPageFromServer 1 time with pageIndex 0
getDataRangeFromServer(0, 49); // -> returns records with indexes[0..49], calls getPageFromServer 2 times  with pageIndex 0, 1
getDataRangeFromServer(5, 51); // -> returns records with indexes[5..51], calls getPageFromServer 3 times  with pageIndex 0, 1, 2

getDataRangeFromServer(50, 99); // -> returns records with indexes[50..99], calls getPageFromServer 2 times with pageIndex 2, 3
getDataRangeFromServer(55, 99); // -> returns records with indexes[55..99], calls getPageFromServer 2 times with pageIndex 2, 3

/*
sample cases:

1) getDataRangeFromServer(0, 1) -> returns records with indexes [0, 1], calls getPageFromServer 1 time with pageIndex 0
2) getDataRangeFromServer(0, 49) -> returns records with indexes[0..49], calls getPageFromServer 2 times  with pageIndex 0, 1
3) getDataRangeFromServer(5, 51) -> returns records with indexes[5..51], calls getPageFromServer 3 times  with pageIndex 0, 1, 2

4) getDataRangeFromServer(50, 99) -> returns records with indexes[50..99], calls getPageFromServer 2 times with pageIndex 2, 3
5) getDataRangeFromServer(55, 99) -> returns records with indexes[55..99], calls getPageFromServer 2 times with pageIndex 2, 3

 Records on server do not have indexes, you should not assume what record has numeric index.
 Records are catalog items, they have alpha numeric ids which you should not use in the given task

*/
