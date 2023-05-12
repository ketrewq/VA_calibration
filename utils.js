function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function getCSV(data, filename) {
    var csv = [];
    var row = [];
 
    row.push(
        "LVF_1_rt_y",
        "LVF_2_rt_y",
        "LVF_3_rt_y",
        "RVF_1_rt_y",
        "RVF_2_rt_y",
        "RVF_3_rt_y",
        
        "LVF_1_rt_n",
        "LVF_2_rt_n",
        "LVF_3_rt_n",
        "RVF_1_rt_n",
        "RVF_2_rt_n",
        "RVF_3_rt_n",
        
        "LVF_1_cor_y",
        "LVF_2_cor_y",
        "LVF_3_cor_y",
        "RVF_1_cor_y",
        "RVF_2_cor_y",
        "RVF_3_cor_y",
        
        "LVF_1_cor_n",
        "LVF_2_cor_n",
        "LVF_3_cor_n",
        "RVF_1_cor_n",
        "RVF_2_cor_n",
        "RVF_3_cor_n"
    );
    
    csv.push(row.join(","));
  
    row = [];
    row.push(
        data.filter({correct_response:'/', location:'LVF_1'}).select('rt').mean(),
        data.filter({correct_response:'/', location:'LVF_2'}).select('rt').mean(),
        data.filter({correct_response:'/', location:'LVF_3'}).select('rt').mean(),
        data.filter({correct_response:'/', location:'RVF_1'}).select('rt').mean(),
        data.filter({correct_response:'/', location:'RVF_2'}).select('rt').mean(),
        data.filter({correct_response:'/', location:'RVF_3'}).select('rt').mean(),

        data.filter({correct_response:'z', location:'LVF_1'}).select('rt').mean(),
        data.filter({correct_response:'z', location:'LVF_2'}).select('rt').mean(),
        data.filter({correct_response:'z', location:'LVF_3'}).select('rt').mean(),
        data.filter({correct_response:'z', location:'RVF_1'}).select('rt').mean(),
        data.filter({correct_response:'z', location:'RVF_2'}).select('rt').mean(),
        data.filter({correct_response:'z', location:'RVF_3'}).select('rt').mean(),
        
        data.filter({correct_response:'/', location:'LVF_1', correct:true}).count()/data.filter({correct_response:'/', location:'LVF_1'}).count(),
        data.filter({correct_response:'/', location:'LVF_2', correct:true}).count()/data.filter({correct_response:'/', location:'LVF_2'}).count(),
        data.filter({correct_response:'/', location:'LVF_3', correct:true}).count()/data.filter({correct_response:'/', location:'LVF_3'}).count(),
        data.filter({correct_response:'/', location:'RVF_1', correct:true}).count()/data.filter({correct_response:'/', location:'RVF_1'}).count(),
        data.filter({correct_response:'/', location:'RVF_2', correct:true}).count()/data.filter({correct_response:'/', location:'RVF_2'}).count(),
        data.filter({correct_response:'/', location:'RVF_3', correct:true}).count()/data.filter({correct_response:'/', location:'RVF_3'}).count(),
        
        data.filter({correct_response:'z', location:'LVF_1', correct:true}).count()/data.filter({correct_response:'/', location:'LVF_1'}).count(),
        data.filter({correct_response:'z', location:'LVF_2', correct:true}).count()/data.filter({correct_response:'/', location:'LVF_2'}).count(),
        data.filter({correct_response:'z', location:'LVF_3', correct:true}).count()/data.filter({correct_response:'/', location:'LVF_3'}).count(),
        data.filter({correct_response:'z', location:'RVF_1', correct:true}).count()/data.filter({correct_response:'/', location:'RVF_1'}).count(),
        data.filter({correct_response:'z', location:'RVF_2', correct:true}).count()/data.filter({correct_response:'/', location:'RVF_2'}).count(),
        data.filter({correct_response:'z', location:'RVF_3', correct:true}).count()/data.filter({correct_response:'/', location:'RVF_3'}).count()
        
    );
    csv.push(row.join(","));
  
    downloadCSV(csv.join("\n"), filename);
}
