const ALL_SPRINTS = [
    {
      id: 's0',
      title: 'Sprint 0',
      description:
        'Self preparation. Git + GitHub',
      location: 'online',
      date: '2022-10-16',
      image: 'images/prepare-content.jpg',
      isFeatured: false,
    },
    {
      id: 's1',
      title: 'Sprint 1',
      description:
        "JSX, Styles. SCRUM theory",
      location: 'online',
      date: '2022-10-19',
      image: 'images/books-content.jpg',
      isFeatured: true,
    },
    {
      id: 's2',
      title: 'Sprint 2',
      description:
        'JS for React',
      location: 'online',
      date: '2022-10-23',
      image: 'images/js-content.jpg',
      isFeatured: true,
    },
    {
        id: 's3',
        title: 'Sprint 3',
        description:
          'React - Key, State, Props, sprints',
        location: 'online',
        date: '2022-10-26',
        image: 'images/react-content.jpg',
        isFeatured: true,
      }
  ];
  
  export function getFeaturedSprints() {
    return ALL_SPRINTS.filter((sprint) => sprint.isFeatured);
  }
  
  export function getAllSprints() {
    return ALL_SPRINTS;
  }
  
  export function getFilteredSprints(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredsprints = ALL_SPRINTS.filter((sprint) => {
      const sprintDate = new Date(sprint.date);
      return sprintDate.getFullYear() === year && sprintDate.getMonth() === month - 1;
    });
  
    return filteredsprints;
  }
  
  export function getSprintById(id) {
    return ALL_SPRINTS.find((sprint) => sprint.id === id);
  }