Search.setIndex({docnames:["index","interpret","overview/extending","overview/faq","overview/installation","overview/tutorials","predict","predict.predict_handlers","samplers","selene","sequences","targets","tutorials/index","utils"],envversion:53,filenames:["index.rst","interpret.rst","overview/extending.md","overview/faq.md","overview/installation.md","overview/tutorials.md","predict.rst","predict.predict_handlers.rst","samplers.rst","selene.rst","sequences.rst","targets.rst","tutorials/index.rst","utils.rst"],objects:{"":{selene_sdk:[9,0,0,"-"]},"selene_sdk.EvaluateModel":{evaluate:[9,2,1,""]},"selene_sdk.TrainModel":{evaluate:[9,2,1,""],train:[9,2,1,""],train_and_validate:[9,2,1,""],validate:[9,2,1,""]},"selene_sdk.interpret":{ISMResult:[1,1,1,""],heatmap:[1,5,1,""],load_variant_abs_diff_scores:[1,5,1,""],ordered_variants_and_indices:[1,5,1,""],rescale_score_matrix:[1,5,1,""],sequence_logo:[1,5,1,""],sort_standard_chrs:[1,5,1,""],variant_diffs_scatter_plot:[1,5,1,""]},"selene_sdk.interpret.ISMResult":{from_file:[1,3,1,""],get_score_matrix_for:[1,2,1,""],reference_sequence:[1,4,1,""],sequence_type:[1,4,1,""]},"selene_sdk.predict":{AnalyzeSequences:[6,1,1,""],predict_handlers:[7,0,0,"-"]},"selene_sdk.predict.AnalyzeSequences":{get_predictions_for_fasta_file:[6,2,1,""],in_silico_mutagenesis:[6,2,1,""],in_silico_mutagenesis_from_file:[6,2,1,""],in_silico_mutagenesis_predict:[6,2,1,""],predict:[6,2,1,""],variant_effect_prediction:[6,2,1,""]},"selene_sdk.predict.predict_handlers":{DiffScoreHandler:[7,1,1,""],LogitScoreHandler:[7,1,1,""],PredictionsHandler:[7,1,1,""],WritePredictionsHandler:[7,1,1,""],WriteRefAltHandler:[7,1,1,""],write_to_file:[7,5,1,""]},"selene_sdk.predict.predict_handlers.DiffScoreHandler":{handle_NA:[7,2,1,""],handle_batch_predictions:[7,2,1,""],write_to_file:[7,2,1,""]},"selene_sdk.predict.predict_handlers.LogitScoreHandler":{handle_NA:[7,2,1,""],handle_batch_predictions:[7,2,1,""],write_to_file:[7,2,1,""]},"selene_sdk.predict.predict_handlers.PredictionsHandler":{handle_NA:[7,2,1,""],handle_batch_predictions:[7,2,1,""],write_to_file:[7,2,1,""]},"selene_sdk.predict.predict_handlers.WritePredictionsHandler":{handle_NA:[7,2,1,""],handle_batch_predictions:[7,2,1,""],write_to_file:[7,2,1,""]},"selene_sdk.predict.predict_handlers.WriteRefAltHandler":{handle_NA:[7,2,1,""],handle_batch_predictions:[7,2,1,""],write_to_file:[7,2,1,""]},"selene_sdk.samplers":{BedFileSampler:[8,1,1,""],IntervalsSampler:[8,1,1,""],MatFileSampler:[8,1,1,""],OnlineSampler:[8,1,1,""],RandomPositionsSampler:[8,1,1,""],Sampler:[8,1,1,""]},"selene_sdk.samplers.BedFileSampler":{get_data:[8,2,1,""],get_data_and_targets:[8,2,1,""],sample:[8,2,1,""]},"selene_sdk.samplers.IntervalsSampler":{sample:[8,2,1,""]},"selene_sdk.samplers.MatFileSampler":{get_data:[8,2,1,""],get_data_and_targets:[8,2,1,""],sample:[8,2,1,""]},"selene_sdk.samplers.OnlineSampler":{STRAND_SIDES:[8,4,1,""],get_data_and_targets:[8,2,1,""],get_dataset_in_batches:[8,2,1,""],get_feature_from_index:[8,2,1,""],get_sequence_from_encoding:[8,2,1,""],get_test_set:[8,2,1,""],get_validation_set:[8,2,1,""],save_dataset_to_file:[8,2,1,""]},"selene_sdk.samplers.RandomPositionsSampler":{sample:[8,2,1,""]},"selene_sdk.samplers.Sampler":{BASE_MODES:[8,4,1,""],get_data_and_targets:[8,2,1,""],get_validation_set:[8,2,1,""],sample:[8,2,1,""],set_mode:[8,2,1,""]},"selene_sdk.sequences":{Genome:[10,1,1,""],Proteome:[10,1,1,""],Sequence:[10,1,1,""],encoding_to_sequence:[10,5,1,""],get_reverse_encoding:[10,5,1,""],sequence_to_encoding:[10,5,1,""]},"selene_sdk.sequences.Genome":{BASES_ARR:[10,4,1,""],BASE_TO_INDEX:[10,4,1,""],COMPLEMENTARY_BASE_DICT:[10,4,1,""],INDEX_TO_BASE:[10,4,1,""],UNK_BASE:[10,4,1,""],coords_in_bounds:[10,2,1,""],encoding_to_sequence:[10,6,1,""],get_chr_lens:[10,2,1,""],get_chrs:[10,2,1,""],get_encoding_from_coords:[10,2,1,""],get_sequence_from_coords:[10,2,1,""],sequence_to_encoding:[10,6,1,""]},"selene_sdk.sequences.Proteome":{BASES_ARR:[10,4,1,""],BASE_TO_INDEX:[10,4,1,""],INDEX_TO_BASE:[10,4,1,""],UNK_BASE:[10,4,1,""],coords_in_bounds:[10,2,1,""],encoding_to_sequence:[10,6,1,""],get_encoding_from_coords:[10,2,1,""],get_prot_lens:[10,2,1,""],get_prots:[10,2,1,""],get_sequence_from_coords:[10,2,1,""],sequence_to_encoding:[10,6,1,""]},"selene_sdk.sequences.Sequence":{BASES_ARR:[10,4,1,""],BASE_TO_INDEX:[10,4,1,""],INDEX_TO_BASE:[10,4,1,""],UNK_BASE:[10,4,1,""],coords_in_bounds:[10,2,1,""],encoding_to_sequence:[10,6,1,""],get_encoding_from_coords:[10,2,1,""],get_sequence_from_coords:[10,2,1,""],sequence_to_encoding:[10,6,1,""]},"selene_sdk.targets":{GenomicFeatures:[11,1,1,""],Target:[11,1,1,""]},"selene_sdk.targets.GenomicFeatures":{get_feature_data:[11,2,1,""],is_positive:[11,2,1,""]},"selene_sdk.targets.Target":{get_feature_data:[11,2,1,""]},"selene_sdk.utils":{NonStrandSpecific:[13,1,1,""],PerformanceMetrics:[13,1,1,""],execute:[13,5,1,""],get_indices_and_probabilities:[13,5,1,""],initialize_logger:[13,5,1,""],initialize_model:[13,5,1,""],instantiate:[13,5,1,""],load:[13,5,1,""],load_features_list:[13,5,1,""],load_model_from_state_dict:[13,5,1,""],load_path:[13,5,1,""],parse_configs_and_run:[13,5,1,""],visualize_precision_recall_curves:[13,5,1,""],visualize_roc_curves:[13,5,1,""]},"selene_sdk.utils.PerformanceMetrics":{add_metric:[13,2,1,""],remove_metric:[13,2,1,""],update:[13,2,1,""],visualize:[13,2,1,""],write_feature_scores_to_file:[13,2,1,""]},selene_sdk:{EvaluateModel:[9,1,1,""],TrainModel:[9,1,1,""],interpret:[1,0,0,"-"],predict:[6,0,0,"-"],samplers:[8,0,0,"-"],sequences:[10,0,0,"-"],targets:[11,0,0,"-"],utils:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function","6":"py:classmethod"},terms:{"abstract":[7,10,11],"boolean":10,"catch":11,"char":10,"class":[1,2,6,7,8,9,10,11,13],"default":[1,6,8,9,10,11,13],"float":[1,8,9,11,13],"function":[1,2,6,8,9,11,13],"int":[1,6,8,9,10,11,13],"new":[1,2,8,12],"return":[1,6,7,8,9,10,11,13],"static":1,"true":[1,6,8,9,10,11,13],"try":13,Axes:1,For:[1,3,7,10,11],NOT:6,One:[10,11],POS:6,That:6,The:[1,2,5,6,7,8,9,10,11,13],These:[8,11],Used:7,Will:[6,13],_loss:[9,13],_preprocess:13,_proxi:13,_selene_:13,abl:7,about:2,abov:[1,11],abs_diff:6,absdiffscorehandl:6,absenc:8,absent:11,absolut:[1,6],accept:[11,13],access:[10,11],account:[8,13],accumul:7,acid:10,across:[1,7,13],activ:4,actual:[1,13],add:13,add_metr:13,added:2,addit:[8,11,13],address:3,again:8,aim:8,all:[1,6,7,8,9,10,11,13],allevi:8,allow:[1,8],alpha:1,alphabet:[1,6,8,10],alreadi:[6,8,13],also:[4,8,9],alt:[1,6,7],alt_writ:7,altern:[1,7],amino:10,analysi:6,analyz:[6,12,13],ani:[1,11,13],annot:[1,8,11],appear:[1,13],appli:[1,6,11],applic:6,appropri:13,architectur:[6,8,13],arg:[7,10,11,13],argument:[1,9,13],around:10,arrai:[1,8,10,11],arraylik:7,assign:[10,11],associ:[1,13],assum:[8,11,13],attach:7,auc:9,aupr:9,auto_open:1,automat:[1,6,8,13],avail:[9,13],averag:[9,13],average_precis:13,axes:1,axi:1,bar:1,base:[0,1,2,6,7,8,9,10,11,13],base_mod:8,base_pr:6,base_predict:7,base_sc:1,base_to_index:10,baselin:7,baseline_predict:7,bases_arr:10,batch:[6,7,8,9],batch_id:7,batch_predict:7,batch_sequ:6,batch_siz:[6,8,9],becaus:7,bed:[8,11],been:[6,8,11,13],befor:8,begin:13,behavior:10,being:11,below:1,between:[1,6,7,8],bgzip:11,bin:8,bin_radiu:8,binari:11,bind:[1,13],biolog:10,bool:[1,6,7,8,9,10,11,13],both:[8,13],bottom:[1,13],bound:10,browser:1,build:4,build_ext:4,calcul:[7,13],call:[8,10,13],can:[1,4,7,8,9,10,13],cannot:[6,13],carri:13,cbar:1,cbar_kw:1,center:8,center_bin_to_predict:8,certain:1,chang:[1,13],charact:[1,8,10],check:[8,10,12],checkpoint:9,checkpoint_resum:9,choic:10,chr1:10,chr6:8,chr7:8,chr8:8,chr9:8,chr:10,chrom:[1,6,10,11],chromosom:[1,10],chrx:8,chry:8,clarifi:11,classmethod:10,clone:4,close:13,close_filehandl:8,closest:1,cmap:1,code:1,collect:[6,7,13],color:1,color_palett:1,color_schem:1,colorbar:1,colorblind:13,column:[1,6,7,8,10,11],column_nam:7,com:4,come:3,comma:1,command:4,commit:4,complement:13,complementari:10,complementary_base_dict:10,complex:12,compos:13,compress:[8,11],comput:[1,6,7,10,13],concern:3,conda:4,config:13,config_exampl:3,confin:13,consid:11,construct:[6,8],constructor:[9,13],contain:[1,6,7,8,10,11,13],contribut:2,conveni:13,convert:10,coordin:[1,8,10,11],coords_in_bound:10,correct:10,correspond:[1,6,7,8,10,11,13],cpu:[4,9],cpu_n_thread:9,creat:[1,6,8,10,13],create_subdirectori:13,criterion:[9,11,13],csv:1,cuda:[6,9,13],current:[6,8,9,10,13],curv:13,cython:4,dag:13,data:[0,1,6,7,8,9,11],data_across_featur:7,data_fram:1,data_parallel:9,data_sampl:9,datafram:1,dataparallel:13,dataset:[8,11],date:13,debug:13,decod:[8,10],deep:0,defin:[8,11],delimit:7,deriv:7,descript:6,design:13,desir:13,detail:8,detect:8,determin:[8,11,13],develop:8,dict:[1,9,10,11,13],dictionari:[9,10,11,13],diff:[1,6,7],differ:[1,6,7,11,13],dimens:7,dir:13,directli:[4,5,8,10],directori:[6,8,9,10,11,13],disk:[8,13],displai:1,distinct:[8,9,11,13],distinguish:7,divid:8,dna:10,document:[2,7,8],doe:[1,6,8,10,13],done:8,dot:13,doubl:6,download:4,dpi:13,draw:[1,8,13],drawn:8,dtype:[1,10],dure:[7,8,9],each:[1,6,7,8,9,10,11,13],effect:[1,6,7],either:[7,13],elabor:7,element:[1,6,7,8,13],empti:8,enabl:9,encod:[8,10,11],end:[6,7,8,10,11,13],enforc:8,ensur:1,enter:1,entri:[1,7],environ:[4,13],equal:[1,11],error:[10,11],essenti:10,etc:1,evalu:[9,13],event:7,everi:1,exampl:[1,5,8,9,10,11,13],except:[1,11],execut:13,exist:[6,8,10,11,13],exit:13,expand:8,expect:[6,8,10,13],experi:1,exponenti:6,extend:0,extens:1,extra:1,extract:[1,10],extrem:8,faa:[10,11],fai:10,fall:8,fals:[1,6,8,9,10,11,13],fasta:[6,10],featur:[1,6,7,8,9,11,13],feature_index_dict:11,feature_threshold:[8,11],features_list:7,fetch:8,fig_titl:13,figur:[1,5,13],file:[1,4,6,7,8,9,10,11,13],filepath:8,filter_featur:1,first:[1,4,7,8,10,11],five:11,flatironinstitut:2,float32:10,float64:1,focu:1,follow:[4,6,11,13],font:1,font_manag:1,font_properti:1,fontproperti:1,foo:13,form:8,format:13,forward:1,found:[1,8,11,13],fraction:8,frame:1,frequenc:9,from:[1,6,7,8,9,10,11,13],from_fil:1,full:8,functionlab:4,functiontyp:[1,11,13],further:[8,11],futur:1,gap:1,gencod:1,gene:1,gener:[1,7,8,9,13],genom:[1,6,7,8,9,11],genomicfeatur:8,get:[1,6,8,10,12],get_chr:10,get_chr_len:10,get_data:8,get_data_and_target:8,get_dataset_in_batch:8,get_encoding_from_coord:10,get_feature_data:11,get_feature_from_index:[8,13],get_feature_from_index_fn:13,get_predictions_for_fasta_fil:6,get_prot:10,get_prot_len:10,get_score_matrix_for:1,get_sequence_from_coord:10,get_sequence_from_encod:8,get_test_set:8,get_validation_set:8,git:4,github:[4,5],given:[1,6,8,10,13],gpu:[4,9],graph:13,graph_obj:1,greater:11,group:8,guarante:1,guid:12,handl:[6,7,8,13],handle_batch_predict:7,handle_na:7,handler:[7,13],hard:11,has:[6,8,11,13],have:[1,6,7,8,10,11,12,13],header:6,height:1,held:8,help:[1,5,7],helper:13,here:13,hex:1,hg19:[1,6],hg38:[1,6],hg_reference_vers:1,hide:1,hierarchi:13,histori:13,hold:[1,8],holdout:8,horizont:1,hot:[8,10,11],hover:1,how:13,html:1,http:4,ident:1,identifi:7,ignor:11,in_silico_mutagenesi:6,in_silico_mutagenesis_from_fil:6,in_silico_mutagenesis_predict:6,inch:13,includ:[1,8,9,13],increas:6,index:[0,6,8,10,11,13],index_feature_dict:11,index_to_bas:10,indic:[1,8,10,11,13],individu:13,info_col:7,inform:[1,2,7,8,10,13],initi:[8,13],initialize_model:13,inplac:4,input:[1,6,7,8,10,11,13],input_featur:13,input_path:[1,6,10,11,13],instal:[0,12],instanc:[10,11],instanti:13,instead:13,integ:10,interchang:11,interest:[2,13],interfac:13,interpret:0,interv:[1,8,9,13],interval_length:[8,13],intervals_path:8,intervalssampl:9,invalid:10,is_posit:11,ism:6,issu:2,item:7,iter:9,its:[7,8,10,13],just:13,kchen:2,kei:[8,9,10,11,13],keyword:[1,9,13],known:9,kwarg:[1,7,10,11,13],label:[1,8,11],labels_sort_fn:1,larg:8,largest:1,last:[8,10,11],lastli:11,latest:4,learn:[0,13],least:[8,11],leav:6,left:1,len_chr:10,len_prot:10,length:[1,6,7,8,10,11,13],less:13,level:[0,1,7,13],librari:0,like:[8,13],line:[1,7,8,13],list:[1,6,7,8,9,10,11,13],liter:13,load:[1,8,9,13],load_path:13,locat:10,log:[7,9,13],logger:13,logging_verbos:9,logit:[6,7],logo:1,look:[8,13],loss:[9,13],loss_criterion:9,made:[1,6],mai:[1,2,7,8,10],mail:2,main:[2,9],make:[1,6,7],mani:1,manipul:1,manner:1,map:[1,8,10,11,13],mask:1,mat:8,match:[1,6,8,13],matfilesampl:9,math:6,matplotlib:[1,13],matrix:[1,7,8,9],max:[1,13],max_effect:1,max_step:9,maximum:9,mean:[1,13],measur:9,meet:11,member:10,memori:8,messag:13,method:[1,6,7,8,9,11,13],metric:[9,13],metric_fn:13,might:13,mini:[6,7,8,9],minim:9,minimum:[11,13],minor:13,miss:13,mode:[8,13],model:[1,6,7,8,9,12,13],model_config:13,modul:[0,1,2,6,7,8,9,10,11,13],more:[2,6,7,8,10,13],most:[3,5,13],motif:1,move:1,multipl:[1,9],must:[1,6,7,8,11,13],mutagenesi:[1,6],mutat:[1,6,12],mutate_n_bas:6,mutations_list:6,n_featur:[8,11],n_sampl:8,n_test_sampl:9,n_validation_sampl:9,na_sampl:7,name:[1,6,7,8,9,10,11,13],ndarrai:[1,6,8,10,11,13],need:[6,8,9,13],needs_base_pr:7,neg:8,nest:13,non:[1,8,11,13],none:[1,6,8,9,11,13],nonfeature_column:7,normal:10,note:[6,7,8,10,11,13],now:[2,3,9,11,13],nth_percentil:1,nth_step_report_stat:9,nth_step_save_checkpoint:9,nucleotid:10,number:[1,6,7,8,9,11,13],numer:[8,10],numpi:[1,6,8,10,11,13],obj:13,object:[1,6,7,8,9,10,11,13],obtain:13,occur:[1,7,8,10,13],odd:7,onc:13,one:[1,6,7,8,10,11,13],ones:1,onli:[1,6,8,10,13],online_sampl:8,onlinesampl:2,open:[1,11],oper:[6,8,13],ops:13,opt:1,optim:[6,9,13],optim_class:13,optim_kwarg:13,optimizer_class:9,optimizer_kwarg:9,option:[1,6,8,9,10,13],order:[1,6,7,8,11,13],ordereddict:13,org:2,organ:[1,10],origin:1,other:[1,8,13],otherwis:[10,11,13],our:[7,12],out:[1,5,8,12,13],out_filenam:7,output:[1,6,7,9,10,13],output_dir:[6,8,9,13],output_path:[1,7,13],output_path_prefix:6,outsid:[8,10],over:[1,9],overlap:11,overrid:13,overview:0,own:[1,13],packag:[0,13],page:0,pair:8,palett:1,panda:1,parallel:6,paramet:[1,6,7,8,9,10,11,13],pariti:8,pars:13,parse_configs_and_run:13,part:10,particular:6,partit:[8,9],pass:[1,6,8,9,13],past:[10,11],path:[1,6,7,8,9,10,11,13],peak:11,per:13,percentag:8,perform:[1,6,8,9,13],pip:4,plan:4,pleas:[2,3,4,5,6],plot:1,plotli:1,point:1,pos:1,posit:[1,6,8,9,10,11,13],position_sc:1,possibl:[9,10],power:9,pre:8,precis:13,predict:[0,1,8,9,11,13],predictionshandl:6,prefer:1,prefix:6,prepend:7,presenc:8,present:[6,11],previou:13,previous:13,probabl:[1,7,8,13],problem:8,proce:13,process:9,produc:[1,13],properti:1,proport:[8,11],proportion:13,prot:10,protein:[1,10,11],provid:[1,7,8,10,13],proxi:13,pyfaidx:10,pylearn2:13,pyplot:[1,13],python:[4,13],pytorch:[0,13],queri:[8,10,11],quickli:10,radiu:8,rais:[1,8,10,13],random:[8,13],random_se:[8,13],randomli:8,randomsampl:9,rate:13,reach:8,read:[9,11,12,13],readm:5,recal:13,recommend:[4,6,12],reconcil:13,record:7,recurs:13,redund:11,ref:[1,6,7],ref_writ:7,refer:[1,2,3,7,8],reference_mask:1,reference_sequ:[1,6,8],region:[8,10,11],rel:1,rememb:1,remove_metr:13,render:[1,5],replac:6,report:[6,9],report_gt_feature_n_posit:[9,13],report_stats_every_n_step:9,repositori:[3,4,5],repres:10,represent:[8,10],reproduc:13,request:2,requir:13,resolut:13,result:[1,6,7,11,13],retriev:[8,9,10,11],revers:[10,13],right:11,roc:[9,13],roc_auc:13,row:[1,7,10],row_id:7,run:[4,8,13],runtim:6,said:10,same:[6,7,8,9,10,11,13],sampl:[7,8,9,11,13],sample_from_interv:8,sample_neg:8,sampler:[0,2,9],save:[6,7,8,9,13],save_checkpoint_every_n_step:9,save_data:6,save_dataset:8,save_dataset_to_fil:8,scale:1,scatter:1,score:[1,6,7,13],score_matrix:1,sdk:4,seaborn:[1,13],search:0,second:1,see:[8,10],seed:[8,13],select:8,selen:[0,1,4,9,12,13],selene_sdk:[2,7],self:[10,11],semicolon:8,send:2,separ:[1,7,8,13],sequenc:[0,1,2,6,7,8,9,11,13],sequence_kei:8,sequence_length:[6,8],sequence_typ:1,sequences_and_target:8,set:[4,6,8,9,10,13],set_mod:8,setup:4,shape:[1,6,7,8],should:[1,3,6,7,8,9,10,11,12,13],show:1,shown:11,shuffl:8,shuffle_fil:8,signifi:10,silico:[1,6],simpli:4,singl:[8,11],size:[1,6,7,8,9,10],skip_threshold:13,smaller:8,some:[1,7,11],soon:[2,3],sort:[1,11],sourc:[1,6,7,8,9,10,11,13],space:6,specif:[11,13],specifi:[1,6,8,9,10,11,13],stack:1,standard:1,start:[6,8,10,11,12],state:13,state_dict:13,statist:9,still:[7,8],store:[1,7,11],str:[1,6,7,8,9,10,11,13],strand:[8,10,11,13],strand_sid:8,stream:13,string:[1,8,10,13],style:13,sub:[1,13],subclass:[1,8],sublist:13,submit:2,submodul:13,subset:8,substitut:13,successfulli:13,suffix:7,sum:1,summari:9,support:[10,13],surrounding_sequence_radiu:8,svg:13,symbol:10,tab:7,tabix:[8,11],tabixerror:11,take:[1,11,13],taken:[1,13],target:[0,2,8,9,10,13],target_matrix:8,target_path:8,targets_avail:8,targets_kei:8,targets_matrix:8,tbi:11,tell:8,termin:4,test:[8,9],test_holdout:8,text:1,than:[1,7,8,11,13],thei:[1,6,13],them:7,therebi:11,thi:[0,1,5,6,7,8,9,10,11,13],third:1,those:[1,7,8,10,13],threshold:[1,11],threshold_lin:1,through:[12,13],thu:[11,13],tick:1,ties:9,time:[6,13],titl:13,todo:[1,7,8,9,11],togeth:[7,9],top:[1,13],torch:[6,9,13],total:8,track:13,train:[1,6,8,9,10,12,13],train_and_valid:9,trained_model_path:[6,9],training_loss:9,transform:[1,10],tripl:6,truncat:8,tupl:[1,6,8,10,13],tutori:[0,3],two:7,txt:13,type:[1,4,6,8,9,10,11,13],typic:8,uncertain:10,undefin:10,underli:1,underscor:6,uniqu:7,unk_bas:10,unknown:10,unless:13,unsupport:1,updat:13,use:[1,4,6,8,9,13],use_cuda:[6,9],use_sequence_nam:6,used:[1,7,8,9,10,13],useful:1,user:[1,2,8,13],uses:[1,13],using:[4,6,9],usual:1,util:0,v28:1,valid:[7,8,9,10,13],validation_holdout:8,valu:[1,7,8,9,10,11,13],valueerror:[1,8,10,13],variabl:[6,7,8,9,10,11,13],variant:[1,6,7,12],variant_effect_predict:6,variou:9,vcf:6,vcf_file:6,vector:[7,8,11],verbos:13,version:[1,6],view:5,vis:1,visual:[1,13],visualize_precision_recall_curv:13,visualize_roc_curv:13,wai:11,want:[1,2,7,8,10,13],warn:13,web:1,websit:5,weight:[6,13],welcom:0,well:[4,8],were:[1,13],what:[5,6,8,13],when:[6,8,10],where:[1,6,7,8,9,10,11,13],wherev:13,whether:[6,8,9,10,11,13],which:[1,3,6,7,8,9,10,11,13],width:1,window:8,wise:1,within:[1,8,10,11,13],without:[7,13],work:[4,5,6],would:[1,8,10],wrap:13,wrapper:10,write:[6,7,13],write_feature_scores_to_fil:13,written:[6,7,13],yaml:13,yet:[6,12],yfg:13,yfp:[10,13],yml:4,you:[2,4,5,6,10,12,13],your:[4,6],yticklabel:1,zero:[10,11]},titles:["selene_sdk documentation","selene_sdk.interpret","Extending Selene","Frequently Asked Questions","Installation","Tutorials","selene_sdk.predict","selene.predict.predict_handlers","selene_sdk.samplers","selene_sdk","selene_sdk.sequences","selene_sdk.targets","Tutorials","selene_sdk.utils"],titleterms:{anaconda:4,analyzesequ:6,ask:3,bedfilesampl:8,configur:13,diffscorehandl:7,document:0,encoding_to_sequ:10,evaluatemodel:9,extend:2,frequent:3,from:4,genom:10,genomicfeatur:11,get_indices_and_prob:13,get_reverse_encod:10,heatmap:1,indic:0,initialize_logg:13,instal:4,interpret:1,intervalssampl:8,ismresult:1,load_features_list:13,load_model_from_state_dict:13,load_variant_abs_diff_scor:1,logitscorehandl:7,matfilesampl:8,nonstrandspecif:13,onlinesampl:8,ordered_variants_and_indic:1,performancemetr:13,predict:[6,7],predict_handl:7,predictionshandl:7,proteom:10,question:3,randompositionssampl:8,rescale_score_matrix:1,sampler:8,selen:[2,7],selene_sdk:[0,1,6,8,9,10,11,13],sequenc:10,sequence_logo:1,sequence_to_encod:10,sort_standard_chr:1,sourc:4,tabl:0,target:11,trainmodel:9,tutori:[5,12],util:13,variant_diffs_scatter_plot:1,write_to_fil:7,writepredictionshandl:7,writerefalthandl:7}})